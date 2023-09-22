import "./Tracks.css";
import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import chat from "./../Main/chat.jpg";
import music from "./../Main/music.avif";
import motivation from "./../Main/motivation.jpg";
import community from "./../Main/community.png";
import games from "./../Main/games.webp";


const Tracks = () => {

    return (
        <>      <div className="App">
        <h2 class="heading">Here's your track</h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#a8d0e6", color: "#000", cursor: "pointer" }}
                    contentArrowStyle={{ borderRight: "7px solid  #000" }}
                    icon="20%"
                    iconStyle={{
                        background: "green",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                        margin: "0 auto"
                    }}
                >
                    {/* <Rooms title="Listen To Your Favourite Music" desc="Experience the healing power of music" img={0}/> */}
                    <div className="list-item">
                        <img
                            src={chat}
                            height="100"
                            width="200"
                            alt="list-icon"
                        />{" "}
                        <p>
                            <h4>Anonymous Chat</h4>
                            Share your feelings and thoughts. Let your heart out. We are listening.
                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="verti   cal-timeline-element--work"
                    contentStyle={{ background: "#a8d0e6", color: "#000" }}
                    contentArrowStyle={{ borderRight: "7px solid  #000" }}
                    icon="40%"
                    iconStyle={{
                        background: "green",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                        margin: "0 auto"
                    }}
                >
                    {/* <Rooms title="Listen To Your Favourite Music" desc="Experience the healing power of music" img={0}/> */}
                    <div className="list-item">
                        <img
                            src={community}
                            height="100"
                            width="200"
                            alt="list-icon"
                        />{" "}
                        <p>
                            <h4>Join Community</h4>
                            Be a part of the community. Exchange thoughts and positivity.
                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="verti   cal-timeline-element--work"
                    contentStyle={{ background: "#a8d0e6", color: "#000" }}
                    contentArrowStyle={{ borderRight: "7px solid  #000" }}
                    icon="60%"
                    iconStyle={{
                        background: "green",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                        margin: "0 auto"
                    }}
                >
                    {/* <Rooms title="Listen To Your Favourite Music" desc="Experience the healing power of music" img={0}/> */}
                    <div className="list-item">
                        <img
                            src={music}
                            height="100"
                            width="200"
                            alt="list-icon"
                        />{" "}
                        <p>
                            <h4>Listen to your favourite songs</h4>
                            Experience the healing power of music.
                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="verti   cal-timeline-element--work"
                    contentStyle={{ background: "#a8d0e6", color: "#000" }}
                    contentArrowStyle={{ borderRight: "7px solid  #000" }}
                    icon="80%"
                    iconStyle={{
                        background: "green",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                        margin: "0 auto"
                    }}
                >
                    {/* <Rooms title="Listen To Your Favourite Music" desc="Experience the healing power of music" img={0}/> */}
                    <div className="list-item">
                        <img
                            src={motivation}
                            height="100"
                            width="200"
                            alt="list-icon"
                        />{" "}
                        <p>
                            <h4>Motivational Quotes and Podcasts</h4>
                            You are not alone. Seek Solution from Experience and Learn More.
                        </p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="verti   cal-timeline-element--work"
                    contentStyle={{ background: "#a8d0e6", color: "#000" }}
                    contentArrowStyle={{ borderRight: "7px solid  #000" }}
                    icon="100%"
                    iconStyle={{
                        background: "green",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                        margin: "0 auto"
                    }}
                >
                    {/* <Rooms title="Listen To Your Favourite Music" desc="Experience the healing power of music" img={0}/> */}
                    <div className="list-item">
                        <img
                            src={games}
                            height="100"
                            width="200"
                            alt="list-icon"
                        />{" "}
                       <p>
                        <h4>Play your favourite game</h4>
                        Wanna boost your dopamine. Lets have some fun with games.
                        </p>
                    </div>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
            {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            icon="50%"
            iconStyle={{
              background: "green",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              margin: "0 auto"
            }}
          >
            <div className="list-item">
              <img
                src="/QQIconBlackOnRed.png"
                height="20"
                width="20"
                alt="list-icon"
              />{" "}
              <p>
                We will release 5 Qitty Qats from their den (tokens that are held
                back from the sale) and air drop them to lucky Qitty Qats holders.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            icon="75%"
            iconStyle={{
              background: "green",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              margin: "0 auto"
            }}
          >
            <div className="list-item">
              <img
                src="/QQIconBlackOnRed.png"
                height="20"
                width="20"
                alt="list-icon"
              />{" "}
              <p>
                We will begin the design of our Qitty Qats Merch, which will
                include a variety of high-end collectibles including, but not
                limited to prints, clothing, collectibles and more from SHAG.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#000", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000" }}
            icon="100%"
            iconStyle={{
              background: "green",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              margin: "0 auto"
            }}
          >
            <div className="list-item">
              <img
                src="/QQIconBlackOnRed.png"
                height="20"
                width="20"
                alt="list-icon"
              />{" "}
              <p>
                Lets celebrate! We will open the Qathouse and have a rip roaring
                time celebrating with our members! Details to be revealed!
              </p>
            </div>
            <div className="list-item">
              <img
                src="/QQIconBlackOnRed.png"
                height="20"
                width="20"
                alt="list-icon"
              />{" "}
              <p>
                We will begin the design of our Qitty Qats Merch, which will
                include a variety of high-end collectibles including, but not
                limited to prints, clothing, collectibles and more from SHAG.
              </p>
            </div>
            <div className="list-item">
              <img
                src="/QQIconBlackOnRed.png"
                height="20"
                width="20"
                alt="list-icon"
              />{" "}
              <p>
                We will open the Qathouse, which is your pass to the hottest club
                around. Here we will engage with the community to develop the
                metaverse world of Qitty Qats with programs and events. Owning a
                Qitty Qat is your membership card to the world of Qitty Qats.
              </p>
            </div>
            <div className="list-item">
              <img
                src="/QQIconBlackOnRed.png"
                height="20"
                width="20"
                alt="list-icon"
              />{" "}
              <p>
                On October 31st, we will take a snapshot of Qitty Qat holders and
                on November 2nd we will airdrop new exclusive Qitty Qats. If you
                own 4 Qitty Qats, you will get 1 exclusive Qitty Qat NFT. If you
                own 8 Qitty Qats, you will get 1 exclusive Qitty Qat NFT. So, you
                could possibly get up to 2 exclusive Qitty Qat NFTs air dropped to
                you on November 2nd!{" "}
              </p>
            </div>
            <div className="list-item">
              <img
                src="/QQIconBlackOnRed.png"
                height="20"
                width="20"
                alt="list-icon"
              />{" "}
              <p>More surprises to be revealed… </p>
            </div>
          </VerticalTimelineElement> */}
        </>

    )

}

export default Tracks
