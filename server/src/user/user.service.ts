import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/user/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }


    async create(user: User): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(user.password, salt);
        const createdUser = new this.userModel({ ...user, password: hashedPassword });
        return createdUser.save();
    }


    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }


    async updateUser(id: string, update: Partial<User>): Promise<User> {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, update, { new: true });
        return updatedUser;
    }


    async deleteUser(id: string): Promise<User> {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        return deletedUser;
    }


    async login(email: string, password: string): Promise<User> {
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new NotFoundException('Invalid password');
        }
        return user;
    }

}


