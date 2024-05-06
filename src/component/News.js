import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import img from "../img/logo.png";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
  // const [articles, setArticles] = useState([]);
  const article = [
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT News Desk",
      title:
        "Lok Sabha Election 2024 LIVE: Priyanka to campaign in Rae Bareli-Amethi tomorrow - Hindustan Times",
      description:
        "Lok Sabha Election 2024 highlights: A total of 94 Lok Sabha seats across 12 states and Union Territories will go to polls on May 7.",
      url: "https://www.hindustantimes.com/india-news/lok-sabha-election-2024-live-updates-may-5-bjp-congress-narendra-modi-rahul-gandhi-india-bloc-nda-vote-counting-101714869718709.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/05/05/550x309/Congress-leader-Priyanka-Gandhi-addressed-a-public_1714664899075_1714928888060.png",
      publishedAt: "2024-05-05T17:58:40Z",
      content:
        "Lok Sabha Election 2024 LIVE: 'Congress &amp; SP are contesting polls for their children's future,' says PM Modi\r\nLok Sabha Election 2024 LIVE: Addressing a public gathering in Etawah, Uttar Pradesh,… [+12208 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Lifestyle Desk",
      title:
        "Does working on night shift lead to various diseases? - The Times of India",
      description:
        "Night shift work is essential for many industries, but it comes with significant health risks. By understanding these risks and implementing strategie",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/does-working-on-night-shift-lead-to-various-diseases/articleshow/109753973.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-109754035,width-1070,height-580,imgsize-1321957,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-05-05T17:30:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Manjiri Joshi, Manoj Gupta",
      title:
        "J&K IAF Convoy Attack Work Of 4 LeT Terrorists Trained By Sajid Jutt, Search On: Intel Sources | Exclusive - News18",
      description:
        'Top intelligence sources to News18: “After the previous attacks, a Standard Operating Procedure (SOP) was developed. As the forces retaliated strongly in Poonch, the terrorists fled. Search is on."',
      url: "https://www.news18.com/india/jks-iaf-convoy-attack-work-of-4-let-terrorists-trained-by-sajid-jutt-search-on-intel-sources-exclusive-8878464.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2024/05/untitled-design-6-2024-05-397ae01986730ff059a47c749bc63d55-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2024-05-05T16:58:23Z",
      content:
        "The attack on the Indian Air Force (IAF) convoy in Jammu and Kashmirs Poonch district was the work of four Lashkar-e-Toiba (LeT) terrorists trained by Sajid Jutt, according to top intelligence source… [+3228 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Aadya+Jha",
      title: "1 - The Times of India",
      description:
        "Adding a variety of seeds into your diet is an easy way to boost your overall health and well-being. Whether sprinkled on top of curd, added to smoothies, or  into baked goods, seeds are a versatile and nutritious addition to any meal.",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/web-stories/7-seeds-that-help-boost-daily-energy/photostory/109859656.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-109859679,imgsize-1628976,width-900,height-1200,resizemode-6/109859679.jpg",
      publishedAt: "2024-05-05T16:30:00Z",
      content:
        "Chia seeds might be small, but they are packed with nutritional content. Loaded with omega-3 fatty acids, fibre, protein, and various micronutrients, including calcium and magnesium, chia seeds are e… [+55 chars]",
    },
    {
      source: {
        id: "the-hindu",
        name: "The Hindu",
      },
      author: "The Hindu",
      title:
        "Campaigning for the third phase of the Lok Sabha election concludes - The Hindu",
      description: null,
      url: "https://www.thehindu.com/elections/lok-sabha/campaigning-for-the-third-phase-of-the-lok-sabha-election-concludes/article68142452.ece",
      urlToImage: null,
      publishedAt: "2024-05-05T16:10:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT News Desk",
      title:
        "Latest Entertainment News, Live Updates Today May 5, 2024: Dev Patel apologised for cutting his crucial scene in Monkey Man for ‘political’ reasons, reveals Makarand Deshpande - Hindustan Times",
      description:
        "Welcome to the live updates platform for Hindustan Times. Follow the major news updates, headlines and breaking news stories from the world of entertainment right here. See the latest developments in Bollywood, Hollywood and track the big news stories of the …",
      url: "https://www.hindustantimes.com/entertainment/latest-entertainment-today-live-updates-may-5-2024-101714872601405.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/05/05/550x309/billboard--world-albums-chart_1714927520785_1714927528649.jpg",
      publishedAt: "2024-05-05T15:42:13Z",
      content:
        "Get the latest news updates and breaking news stories from the world of entertainment. Track all the latest developments in Bollywood, Hollywood and more right here. Disclaimer: This is an AI-generat… [+7552 chars]",
    },
    {
      source: {
        id: null,
        name: "Thehealthsite.com",
      },
      author: "Satata Karmakar",
      title:
        "Lancet Report Predicts 1 Million Breast Cancer Deaths by 2040: Understanding Warning Symptoms of Breast Ca - TheHealthSite",
      description:
        "Breast cancer is now the world's most common carcinogenic disease with the ailment likely to cause a million deaths a year by 2040 according to a new Lancet Commission on breast cancer. TheHealthSite.com",
      url: "https://www.thehealthsite.com/news/lancet-report-predicts-1-million-breast-cancer-deaths-by-2040-understanding-warning-symptoms-of-breast-cancer-in-40s-1088926/",
      urlToImage:
        "https://st1.thehealthsite.com/wp-content/uploads/2024/05/Breast-cancer-4.jpg",
      publishedAt: "2024-05-05T15:32:00Z",
      content:
        "Lancet Report Predicts 1Mn Breast Cancer Deaths by 2040: Understanding Warning Symptoms of Breast Cancer In 40s\r\nBreast cancer is now the world's most common carcinogenic disease with the ailment lik… [+4180 chars]",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "IPL 2024, LSG vs KKR IPL Live Score: Mitchell Starc strikes early in tall chase - Hindustan Times",
      description:
        "IPL 2024, LSG vs KKR IPL Live Score: Lucknow Super Giants vs Kolkata Knight Riders: Sunil Narine smashed 81 as Kolkata Knight Riders posted 235/6 in 20 overs.",
      url: "https://www.hindustantimes.com/cricket/ipl-2024-lsg-vs-kkr-ipl-live-score-match-54-lucknow-super-giants-vs-kolkata-knight-riders-scorecard-ipl-match-live-5-may-101714898624889.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2024/05/05/550x309/India-IPL-Cricket-133_1714927012356_1714927035377.jpg",
      publishedAt: "2024-05-05T15:22:15Z",
      content:
        "IPL 2024, LSG vs KKR IPL Live Score: Lucknow Super Giants vs Kolkata Knight Riders: Sunil Narine continued his sublime form with the bat and smashed 81 runs to help Kolkata Knight Riders post a mammo… [+25834 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Akriti Anand",
      title:
        "Kajol Drops Hilarious Video Of Her Falling Everywhere On World Laughter Day, Manish Malhotra Reacts; Watch - News18",
      description:
        "The actress is likely to star in a horror movie titled Maa, produced by her husband Ajay Devgn and directed by Chhorii fame Vishal Furia.",
      url: "https://www.news18.com/movies/kajol-drops-hilarious-video-of-her-falling-everywhere-on-world-laughter-day-manish-malhotra-reacts-watch-8878886.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2024/05/kajol-fall-2024-05-b273b995e69a784ca3a3f51964fa35b6-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2024-05-05T15:16:34Z",
      content:
        "Kajol hilariously celebrated World Laughter Day. She shared a video of herself stumbling and falling everywhere. The clip, posted on her social media accounts, quickly went viral, drawing reactions f… [+1533 chars]",
    },
    {
      source: {
        id: null,
        name: "Cgtn.com",
      },
      author: "CGTN",
      title: "Chinese President Xi Jinping arrives in Paris, France - CGTN",
      description:
        "Chinese President Xi Jinping arrived in Paris, France on Sunday afternoon, to pay a state visit to the country at the invitation of French President Emmanuel Macron.Upon his arrival, Xi said in a written speech that China is ready to consolidate traditional",
      url: "https://news.cgtn.com/news/2024-05-05/Chinese-President-Xi-Jinping-arrives-in-Paris-France-1tmsrBS3ZwA/p.html",
      urlToImage:
        "https://video.cgtn.com/news/2024-05-05/Chinese-President-Xi-Jinping-arrives-in-Paris-France-1tmsrBS3ZwA/video/534d1ffa331447b5a0596e313fa3cc3c/534d1ffa331447b5a0596e313fa3cc3c-750.jpg",
      publishedAt: "2024-05-05T15:06:13Z",
      content:
        "Chinese President Xi Jinping arrived in Paris, France on Sunday afternoon, to pay a state visit to the country at the invitation of French President Emmanuel Macron.\r\nUpon his arrival, Xi said in a w… [+1087 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Reuters",
      title:
        "Netanyahu war cabinet ends Al Jazeera operations amid Gaza war, Israeli police leads raid against media organisation | Mint - Mint",
      description:
        "Israeli police raided Al Jazeera's Jerusalem hotel office following government decision to shut down its local operations, citing threat to national security. Al Jazeera condemned the move as a 'criminal action' and reserved the right to pursue legal action.",
      url: "https://www.livemint.com/news/world/netanyahu-war-cabinet-ends-al-jazeera-operations-amid-gaza-war-israeli-police-leads-raid-against-media-organisation-11714919267956.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2024/05/05/1600x900/FILES-ISRAEL-PALESTINIAN-CONFLICT-MEDIA-ALJAZEERA-_1714919905533_1714919905757.jpg",
      publishedAt: "2024-05-05T14:44:14Z",
      content:
        "Israeli police raided a Jerusalem hotel room used by Al Jazeera as its de facto office on Sunday following a government decision to shut down the Qatari-owned TV station's local operations, an Israel… [+3827 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TOI Sports Desk",
      title:
        "IPL 2024: All-round Ravindra Jadeja propels Chennai Super Kings to 28-run win over Punjab Kings - The Times of India",
      description:
        "Cricket News: Ravindra Jadeja orchestrated a masterclass all-round show as Chennai Super Kings regained their winning touch with a comprehensive 28-run win over Pun",
      url: "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2024-all-round-ravindra-jadeja-propels-chennai-super-kings-to-28-run-win-over-punjab-kings/articleshow/109861973.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-109861947,width-1070,height-580,imgsize-74350,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-05-05T14:25:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Akriti Anand",
      title:
        "'Pakistan not wearing bangles': Farooq Abdullah's reminder as Rajnath Singh says 'PoK will be merged with India' | Mint - Mint",
      description:
        "Defence Minister Rajnath Singh said that India will not have to use force to take Pakistan-occupied-Kashmir as people would say that we must be merged with India.",
      url: "https://www.livemint.com/news/india/pakistan-not-wearing-bangles-farooq-abdullahs-reminder-as-rajnath-singh-says-pok-will-be-merged-with-india-11714918140124.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2024/05/05/1600x900/Farooq-Abdullah--former-chief-minister-of-Jammu-an_1714918231721_1714918239229.jpg",
      publishedAt: "2024-05-05T14:19:42Z",
      content:
        "Defence Minister Rajnath Singh said on Sunday that he feels there is no need to capture Pakistan-occupied-Kashmir (PoK) by force. He said its people would want to be part of India after seeing the de… [+2861 chars]",
    },
    {
      source: {
        id: null,
        name: "Cgtn.com",
      },
      author: "CGTN",
      title:
        "China braces for potential disruptions as more solar flares loom - CGTN",
      description:
        "Users of radio communication should switch frequencies or employ alternative communication methods to mitigate potential disruptions due to a series of expected solar flares.",
      url: "https://news.cgtn.com/news/2024-05-05/China-braces-for-potential-disruptions-as-more-solar-flares-loom-1tmxlGYaJi0/p.html",
      urlToImage:
        "https://news.cgtn.com/news/2024-05-05/China-braces-for-potential-disruptions-as-more-solar-flares-loom-1tmxlGYaJi0/img/274b1daafcd84dbab019cf3afe40605c/274b1daafcd84dbab019cf3afe40605c-1920.jpeg",
      publishedAt: "2024-05-05T14:06:40Z",
      content:
        "China's National Satellite Meteorological Center (NSMC) has issued a warning for potential disruptions to communication systems due to a series of expected solar flares.\r\nThe alert comes after an X-c… [+612 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "Yimkumla Longkumer, News Desk",
      title:
        "Sex Scandal: HD Revanna Arrested, Blue Corner Notice Issued Against Prajwal | Updates - News18",
      description:
        "HD Revanna was arrested by the SIT on Saturday for alleged sexual assault of several women after a court denied him relief in a kidnapping case filed against him",
      url: "https://www.news18.com/politics/sex-scandal-case-hd-revanna-arrested-kharge-says-prajwal-revanna-will-face-legal-action-as-per-law-8878403.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2024/05/untitled-design-3-2024-05-bfa18c7aea3b0a192983aaa568083b07-16x9.jpg?impolicy=website&width=1200&height=675",
      publishedAt: "2024-05-05T14:01:12Z",
      content:
        "Congress President Mallikarjun Kharge on Sunday said that JD(S) Hassan MP Prajwal Revanna, who has been booked for alleged sexual assault of several women, will face action as per the law. \r\nSIT has … [+2866 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "Business Standard",
      title:
        "IIHL sets sights on $50 bn valuation by 2030: Chairman Ashok Hinduja - Business Standard",
      description: null,
      url: "https://www.business-standard.com/companies/news/iihl-targets-50-bn-valuation-by-2030-says-chairman-ashok-hinduja-124050500133_1.html",
      urlToImage: null,
      publishedAt: "2024-05-05T13:55:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title:
        "JP Morgan upgrades Kotak Mahindra Bank to overweight from neutral; ups target price by 34% - Moneycontrol",
      description:
        "JP Morgan upgraded Kotak Mahindra Bank (KMB) to overweight from neutral, citing supportive valuations post recent RBI actions and senior management departure. The target price has been raised to Rs 2070 per share, marking a 34 percent increase from the last c…",
      url: "https://www.moneycontrol.com/news/business/earnings/jp-morgan-upgrades-kotak-mahindra-bank-to-overweight-from-neutral-ups-target-price-by-34-12714910.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/10/Kotak-Mahindra-Bank-.png",
      publishedAt: "2024-05-05T13:53:15Z",
      content:
        "JP Morgan upgraded Kotak Mahindra Bank (KMB) to overweight from neutral, citing supportive valuations post recent RBI actions and senior management departure. The target price has been raised to Rs 2… [+2364 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Akriti Anand",
      title:
        "Top News Today: PM Modi in Ayodhya, blue corner notice against Prajwal, Canada-India row over Nijjar killing, more | Mint - Mint",
      description:
        "Top News Today, May 5: External Affairs Minister Jaishankar criticized the Justin Trudeau-led government in Canada for issuing visas to people with links to organised crimes.",
      url: "https://www.livemint.com/news/india/top-news-today-pm-modi-in-ayodhya-blue-corner-notice-against-prajwal-canada-india-row-over-nijjar-killing-more-11714915667828.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2024/05/05/1600x900/ANI-20240505197-0_1714916040527_1714916093878.jpg",
      publishedAt: "2024-05-05T13:38:31Z",
      content:
        "Prime Minister Narendra Modi is all set to address a public rally in Ayodhya, Uttar Pradesh on Saturday, ahead of the third phase of the Lok Sabha Elections 2024. In another news, Berkshire Hathaway … [+3266 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Diya Sharma",
      title:
        "Amazon Summer Sale 2024: Up to 65% off on HD smart TVs from OnePlus, Xiaomi, and more - Moneycontrol",
      description:
        "Amazon Summer Sale 2024 is live and will run till May 7. There are deals and discounts on TVs from brands like Sony, LG, OnePlus and others.",
      url: "https://www.moneycontrol.com/technology/amazon-summer-sale-2024-up-to-65-off-on-hd-smart-tvs-from-oneplus-xiaomi-and-more-article-12714902.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2024/05/20240505133203_thom-milkovic-uV1weWrJnRM-unsplash-2.jpg",
      publishedAt: "2024-05-05T13:34:31Z",
      content:
        "Amazon Great Summer Sale running from May 2 to May 7 has an extensive selection of upgraded televisions available at discounts of up to 65% off. You can check a diverse range of sizes from top brands… [+1885 chars]",
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Deepak Upadhyay",
      title:
        "Mamata Banerjee slams BJP 'conspiracy' as Sandeshkhali sting video goes viral - Mint",
      description:
        "Slamming PM Narendra Modi for spreading ‘mistruth’ about Sandeshkhali, West Bengal Chief Minister Mamata Banerjee has called upon the prime minister to stop ‘shedding crocodile tears’ as the ‘conspiracy hatched by the BJP’ has come to the fore with the unrave…",
      url: "https://www.livemint.com/news/india/pm-modi-shedding-crocodile-tears-mamata-banerjee-slams-bjp-conspiracy-as-sandeshkhali-sting-video-goes-viral-11714915367654.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2024/05/05/1600x900/Mamata_Banerjee_1714915686408_1714915686554.jpg",
      publishedAt: "2024-05-05T13:31:12Z",
      content:
        'Slamming Prime Minister Narendra Modi for spreading "mistruth" about Sandeshkhali, West Bengal Chief Minister Mamata Banerjee has called upon the prime minister to stop "shedding crocodile tears" as … [+3493 chars]',
    },
  ];

  // const [totalArticles, setTotalArticles] = useState(0);
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  // document.title = `What's Going | ${
  //   props.category.charAt(0).toUpperCase() + props.category.slice(1)
  // }`;

  // const updateNews = async () => {
  //   props.setProgress(10);
  //   for()
  //   setArticles(article)
  //   // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  //   setLoading(true);

  //   // let data = await fetch(url);

  //   props.setProgress(30);

  //   // let parseData = await data.json();

  //   props.setProgress(70);
  //   setArticles(parseData.articles);
  //   setTotalArticles(parseData.totalResults);
  //   setLoading(false);

  //   props.setProgress(100);
  // };

  // useEffect(() => {
  //   updateNews();
  //   //eslint-disable-next-line
  // }, []);

  // const fetchMoreData = async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //     props.category
  //   }&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;

  //   let data = await fetch(url);
  //   let parseData = await data.json();
  //   setArticles(articles.concat(parseData.articles));
  //   setPage(page + 1);
  // };

  // // const handlePrevious = () => {
  // //   setPage(page - 1);
  // //   updateNews();
  // // };

  // // const handleNext = () => {
  // //   setPage(page + 1);
  // //   updateNews();
  // // };

  return (
    <div className="px-[2.5rem]  pb-[10vh] pt-[5rem]">
      <h1 className="text-[1.2rem] font-semibold text-start py-[1rem]">
        What's Going: Top-10{" "}
        {/* {props.category.charAt(0).toUpperCase() + props.category.slice(1)} News */}
      </h1>

      {/* {loading && <Spinner />} */}

      {/* <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      > */}
      <div className="flex flex-wrap justify-center">
        {article.map((element, index) => {
          return (
            <NewsItem
              key={index}
              imgUrl={element.urlToImage === null ? img : element.urlToImage}
              title={
                element.title === null ? "" : element.title.slice(0, 50) + "..."
              }
              desc={
                element.content === null
                  ? ""
                  : element.content.slice(0, 140) + "..."
              }
              date={element.publishedAt.substring(0, 10)}
              time={element.publishedAt.substring(11, 19)}
              newsUrl={element.url}
            />
          );
        })}
      </div>
      {/* </InfiniteScroll> */}

      {/* <div className="flex justify-between p-10">
          <button
            disabled={this.state.page === 1}
            onClick={this.handlePrevious}
            className="text-[1.2rem] border-[1px] border-black px-[1rem] py-[0.5rem] rounded-md font-semibold bg-blue-500 text-white"
          >
            Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalArticles / this.props.pageSize) ===
              this.state.page
            }
            onClick={this.handleNext}
            className="text-[1.2rem] border-[1px] border-black px-[1rem] py-[0.5rem] rounded-md font-semibold bg-blue-500 text-white"
          >
            Next
          </button>
        </div> */}
    </div>
  );
};
News.propTypes = {
  setProgress: PropTypes.func,
  category: PropTypes.string,
  pageSize: PropTypes.number,
  apiKey: PropTypes.string,
};
export default News;
