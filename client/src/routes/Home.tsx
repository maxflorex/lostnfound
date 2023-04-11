import Content from "../components/content/content"
import DetailBar from "../components/detailbar/detailbar"
import Footer from "../components/footer/footer"
import Sidebar from "../components/sidebar/Sidebar"

type Props = {}

const Home = (props: Props) => {
	return (
		<>
			<section className="main">
				<div className="flex">
					<Sidebar />
					<DetailBar />
					<Content />
				</div>
			</section>
			{/* <Footer /> */}
		</>
	)
}

export default Home