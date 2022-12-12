import {useRouter} from 'next/router';

//our-domain.com/News/Something-important

function DetailPage() {

    const router = useRouter();
    
    const newsID = router.query.newsID;

    //Send a request to backend API
    //to fetch the news item with newsID
    //Will need this for project

    return <h1> The Detail Page</h1>
}

export default DetailPage;