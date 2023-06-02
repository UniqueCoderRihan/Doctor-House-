
import AuthorInfo from './AuthorInfo/AuthorInfo';
import Banner from './Banner/Banner';
import MainReviews from './Reviews/MainReviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AuthorInfo></AuthorInfo>
            <MainReviews></MainReviews>
        </div>
    );
};

export default Home;