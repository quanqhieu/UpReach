import "./ReportSocial.css";
import { ReactComponent as Facebook } from "../../../../Assets/Icon/Facebook.svg";
import { ReactComponent as Instagram } from "../../../../Assets/Icon/Instagram.svg";
import { ReactComponent as Youtube } from "../../../../Assets/Icon/Youtube.svg";
import { ReactComponent as Tiktok } from "../../../../Assets/Icon/Tiktok.svg";
import { Tooltip } from "antd";
import roundNumber from "../../../InfluUpdateProfileModal/roundNumber";
import "../../../../CSS/Theme.css";
const ReportSocial = ({ influInfo, roleClient }) => {
  return (
    <>
      {/* <div
        className={`report-social-layout ${
          roleClient === "Free" ? "blur-data-to-payment" : ""
        }`}
      > */}
      <div className="report-social-layout">
        <div className="report-general">
          <p className="report-general-title">GENERAL</p>
          <div className="report-general-contents">
            <div className="report-general-content-left">
              <div className="report-general-content-item">
                <p>Followers:</p>
                <div className="interact-block">
                  <Tooltip
                    placement="top"
                    title={Number(
                      influInfo?.influencerFollowers
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influencerFollowers) || 0}
                    </span>
                  </Tooltip>
                </div>
              </div>

              <div className="report-general-content-item">
                <p>Engagement:</p>
                <div className="interact-block">
                  <Tooltip
                    placement="top"
                    title={Number(
                      influInfo?.influencerEngagement
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influencerEngagement) || 0}%
                    </span>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="report-general-content-right">
              <div className="report-general-content-item">
                <div className="cost-estimate-edit-from">
                  <p>Cost estimate:</p>

                  <div className="cost-estimate-block">
                    <Tooltip
                      placement="top"
                      title={Number(
                        influInfo?.influencerCostEstimateFrom
                      ).toLocaleString("vi-VN")}
                    >
                      <span className="text-tooltip">
                        {influInfo?.influencerCostEstimateFrom?.length > 8
                          ? `${Number(influInfo?.influencerCostEstimateFrom)
                              .toLocaleString("vi-VN")
                              ?.slice(0, 10)}...`
                          : Number(
                              influInfo?.influencerCostEstimateFrom
                            ).toLocaleString("vi-VN")}
                      </span>
                    </Tooltip>
                  </div>
                </div>
                <div className="cost-estimate-edit-to">
                  <p>to</p>

                  <div className="cost-estimate-block">
                    <Tooltip
                      placement="top"
                      title={Number(
                        influInfo?.influencerCostEstimateTo
                      ).toLocaleString("vi-VN")}
                    >
                      <span className="text-tooltip">
                        {influInfo?.influencerCostEstimateTo?.length > 8
                          ? `${Number(influInfo?.influencerCostEstimateTo)
                              .toLocaleString("vi-VN")
                              ?.slice(0, 10)}...`
                          : Number(
                              influInfo?.influencerCostEstimateTo
                            ).toLocaleString("vi-VN")}
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </div>

              <div className="report-general-content-item">
                <p>Post per week:</p>

                <div className="interact-block">
                  <Tooltip
                    placement="top"
                    title={Number(
                      influInfo?.influencerPostsPerWeek
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influencerPostsPerWeek) || 0}
                    </span>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="report-social">
          <div className="social-icon-title">
            <Facebook className="social-icon" />
            <a
              href={influInfo?.influencerLinkFb}
              target="_blank"
              rel="noreferrer"
            >
              {influInfo?.influencerLinkFb === null
                ? "Facebook"
                : influInfo?.influencerLinkFb?.length <= 32
                ? influInfo?.influencerLinkFb
                : influInfo?.influencerLinkFb?.slice(0, 32) + "..."}
            </a>
          </div>
          <div className="cover-follower-interaction">
            <div className="follower-interaction">
              {roundNumber(influInfo?.influencerFollowFb) || 0}

              <p>Followers</p>
            </div>
            <div className="follower-interaction">
              {roundNumber(influInfo?.influencerInteractionFb) || 0}

              <p>Interactions</p>
            </div>
          </div>
        </div>
        <div className="report-social">
          <div className="social-icon-title">
            <Instagram className="social-icon" />
            <a
              href={influInfo?.influencerLinkInsta}
              target="_blank"
              rel="noreferrer"
            >
              {influInfo?.influencerLinkInsta === null
                ? "Instagram"
                : influInfo?.influencerLinkInsta?.length <= 32
                ? influInfo?.influencerLinkInsta
                : influInfo?.influencerLinkInsta?.slice(0, 32) + "..."}
            </a>
          </div>
          <div className="cover-follower-interaction">
            <div className="follower-interaction">
              {roundNumber(influInfo?.influencerFollowInsta) || 0}

              <p>Followers</p>
            </div>
            <div className="follower-interaction">
              {roundNumber(influInfo?.influencerInteractionInsta) || 0}

              <p>Interactions</p>
            </div>
          </div>
        </div>
        <div className="report-social">
          <div className="social-icon-title">
            <Youtube className="social-icon" />
            <a
              href={influInfo?.influencerLinkYoutube}
              target="_blank"
              rel="noreferrer"
            >
              {influInfo?.influencerLinkYoutube === null
                ? "Youtube"
                : influInfo?.influencerLinkYoutube?.length <= 32
                ? influInfo?.influencerLinkYoutube
                : influInfo?.influencerLinkYoutube?.slice(0, 32) + "..."}
            </a>
          </div>
          <div className="cover-follower-interaction">
            <div className="follower-interaction">
              {roundNumber(influInfo?.influencerFollowYoutube) || 0}

              <p>Followers</p>
            </div>
            <div className="follower-interaction">
              {roundNumber(influInfo?.influencerInteractionYoutube) || 0}

              <p>Interactions</p>
            </div>
          </div>
        </div>
        <div className="report-social">
          <div className="social-icon-title">
            <Tiktok className="social-icon" />
            <a
              href={influInfo?.influencerLinkTiktok}
              target="_blank"
              rel="noreferrer"
            >
              {influInfo?.influencerLinkTiktok === null
                ? "Tiktok"
                : influInfo?.influencerLinkTiktok?.length <= 32
                ? influInfo?.influencerLinkTiktok
                : influInfo?.influencerLinkTiktok?.slice(0, 32) + "..."}
            </a>
          </div>
          <div className="cover-follower-interaction">
            <div className="follower-interaction">
              {roundNumber(influInfo?.influencerFollowTikTok) || 0}

              <p>Followers</p>
            </div>
            <div className="follower-interaction">
              {roundNumber(influInfo?.influencerInteractionTiktok) || 0}

              <p>Interactions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportSocial;
