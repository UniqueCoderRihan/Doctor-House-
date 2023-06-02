
import AuthorInfo from './AuthorInfo/AuthorInfo';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import MainReviews from './Reviews/MainReviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AuthorInfo></AuthorInfo>
            <MainReviews></MainReviews>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;