import { selectAllCampsites } from './campsitesSlice';
import { Col, Row } from 'reactstrap';
import HomePageIMG from "./HomePageIMG";
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import Error from '../../components/Error';




const HomePageIMGList = () => {
    //  const campsites = selectAllCampsites();
    const HomePageImgs = useSelector(selectAllCampsites)
    console.log('img:', campsites);
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errMsg = useSelector((state) => state.campsites.errMsg);
    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }
    return (
        <Row className='ms-auto'>{
            campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        {<CampsiteCard campsite={campsite} />}
                    </Col>
                );
            })}</Row>
    );
}

export default HomePageIMGList;
