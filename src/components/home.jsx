import '../styles/home.css'


const Home = () => {
    let images =[
        {
            img:'images/1.webp'
        },
        {
            img:'images/2.webp'
        },
        {
            img:'images/3.webp'
        },
        {
            img:'images/4.webp'
        },
        {
            img:'images/5.webp'
        }
    ]
    return ( 
        <div className="home">
            <div className="banner">
                <div className="description">
                    <p>All-time best & <br /> noteworthy movies in just <br /> one click. Subscribe Now <br /> to Binge!</p>
                    <button>Subscribe Now</button>
                </div>
                {/* <marquee behavior="scroll" direction="" scrollamount="40"> */}
                <div className="banner_image">
                    <img width="1200" height="300" src="images/main.jpg" alt="" />
                    {/* <img width="1200" height="300" src="images/main2.jpg" alt="" />
                    <img width="1200" height="300" src="images/main4.jpg" alt="" />
                    <img width="1200" height="300" src="images/main3.jpg" alt="" />
                    <img width="1200" height="300" src="images/main5.jpg" alt="" />
                    <img width="1200" height="300" src="images/main6.jpg" alt="" /> */}
                </div>
                {/* </marquee> */}
                </div>
                <div className="movies_list">
                    <h1>Recommend for you</h1>
                    {images.map((data)=>(
                        <img src={data.img} alt=""/>
                    ))}
                     {/* <img src="images/1.webp"  alt="" />
                    <img src="images/2.webp"  alt="" />
                    <img src="images/3.webp"  alt="" />
                    <img src="images/4.webp"  alt="" />
                    <img src="images/5.webp"  alt="" />  */}
                </div>
        </div>
     );
}
 
export default Home;