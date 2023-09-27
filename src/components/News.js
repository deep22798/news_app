import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {


apikey=process.env.REACT_APP_API_KEY;

    static defaultProps = {
        country: 'in',
        pageSize: 15,
        category: 'general',
    }

    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        console.log('hehvjhjjy');
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }


    async updatenews() {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines/?country=in&category=${this.props.category}&apiKey=${this.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30)

        let parseddata = await data.json();
        this.props.setProgress(50)

        this.setState({
            articles: parseddata.articles,
            totalResults: parseddata.totalResults,
            loading: false
        });
        this.props.setProgress(100)


    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines/?country=in&category=${this.props.category}&apiKey=c05db45746d14cc0a0b1f675b22e7c50&page=1&pageSize=${this.props.pageSize}`
        // this.props.setProgress(0)
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parseddata = await data.json();
        // this.setState({
        //     articles: parseddata.articles,
        //     totalResults: parseddata.totalResults,
        //     loading: false
        // });
        // this.props.setProgress(100)
        this.updatenews();
    }


    // handlepre = async () => {
    //     this.setState({
    //         page: this.state.page - 1
    //     })
    //     this.updatenews();

    // }
    // handlenext = async () => {
    //     this.setState({
    //         page: this.state.page + 1
    //     })
    //     this.updatenews();
    // }


    fetchMoreData=async()=>{
        this.setState({
            page: this.state.page + 1
            
        });
        const url = `https://newsapi.org/v2/top-headlines/?country=in&category=${this.props.category}&apiKey=c05db45746d14cc0a0b1f675b22e7c50&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            articles:this.state.articles.concat(parseddata.articles),
            totalResults: parseddata.totalResults,
            loading: false
        })
    }

    render() {
        return (
            <>
                {/* <div className=" my-3 mx-5"> */}
                    <h1 style={{ textAlign: "center" }}>WingsNews</h1>
                    {this.state.loading?<Loading/>:null}

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={this.state.loading?<Loading></Loading>:null}
                    >
                        <div className="container-lg">
                        <div className='row'>
                            {
                                this.state.articles.map((element) => {
                                    return <div className='col-md-6 col-lg-4' key={element.url}>
                                        <NewsItem title={element.title} disc={element.description} imgurl={!element.urlToImage ? 'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg' : element.urlToImage} uniq={element.url}></NewsItem>
                                    </div>

                                })
                            }

                        </div>
                        </div>
                       
                    </InfiniteScroll>

                {/* </div> */}


                {/* <div className="container d-flex justify-content-between my-3">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlepre}>Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary" onClick={this.handlenext}>Next</button>
                </div> */}
            </>
        )
    }
}

export default News
