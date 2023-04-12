import { useState } from "react"
import Content from "../components/content/content"
import DetailBar from "../components/detailbar/detailbar"
import Footer from "../components/footer/footer"
import Sidebar from "../components/sidebar/Sidebar"

type Props = {}

const Home = (props: Props) => {

	const [hideBar, setHideBar] = useState(false)

	return (
		<>
			<section className="main">
				<div className="flex">
					<Sidebar setHideBar={setHideBar} hideBar={hideBar} />
					{!hideBar && <DetailBar setHideBar={setHideBar} hideBar={hideBar} />}
					<Content />
				</div>
			</section>
			{/* <Footer /> */}
		</>
	)
}

export default Home