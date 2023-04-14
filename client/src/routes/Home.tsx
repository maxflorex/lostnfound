import { useEffect, useState } from "react"
import { fetchAllItems } from "../api/api"
import Content from "../components/content/content"
import DetailBar from "../components/detailbar/detailbar"
import Footer from "../components/footer/footer"
import Sidebar from "../components/sidebar/Sidebar"

type Props = {}

const Home = (props: Props) => {

	const [hideBar, setHideBar] = useState(false)
	const [items, setItems] = useState([])

	useEffect(() => {
		const fetchItems = async () => {
			const data = await fetchAllItems();
			setItems(data)
		}

		fetchItems()
	}, [])

	console.log(items);
	

	return (
		<>
			<section className="main">
				<div className="flex">
					<Sidebar setHideBar={setHideBar} hideBar={hideBar} />
					{!hideBar && <DetailBar hideBar={hideBar} />}
					<Content />
				</div>
			</section>
			{/* <Footer /> */}
		</>
	)
}

export default Home