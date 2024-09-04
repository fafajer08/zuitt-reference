import Banner from '../components/Banner';
import Highlights from '../components/Highlights';


export default function Home() {
	return (
		<>
			<Banner 
				title={'Zuitt'} 
				content={'Opportunities for everyone, everywhere'}
				buttonLabel = {'Enroll Now'} 
				destination = {'/courses'} />
			<Highlights />
			
		</>
	)
}