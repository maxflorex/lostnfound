import { createContext, useEffect, useState } from "react"
import { fetchAllItems } from "../api/api"
import Content from "../components/content/content"
import DetailBar from "../components/detailbar/detailbar"
import Footer from "../components/footer/footer"
import Sidebar from "../components/sidebar/Sidebar"
import { ItemInterface } from "../assets/misc"

interface ItemsContextType {
	items: ItemInterface[];
	addNew: boolean;
	setAddNew: (addNew: boolean) => void;
}

export const ItemsContext = createContext<ItemsContextType>({
	items: [],
	addNew: false,
	setAddNew: () => { },
});

function Home() {

	const [hideBar, setHideBar] = useState(false)
	const [items, setItems] = useState([])
	const [addNew, setAddNew] = useState(false);

	useEffect(() => {
		const fetchItems = async () => {
			const data = await fetchAllItems();
			setItems(data)
		}

		fetchItems()
	}, [addNew])


	return (
		<ItemsContext.Provider value={{ items, addNew, setAddNew }}>
			<section className="main">
				<div className="flex">
					<Sidebar setHideBar={setHideBar} hideBar={hideBar} />
					{!hideBar && <DetailBar hideBar={hideBar} />}
					<Content items={items} />
				</div>
			</section>
			{/* <Footer /> */}
		</ItemsContext.Provider >
	)
}

export default Home