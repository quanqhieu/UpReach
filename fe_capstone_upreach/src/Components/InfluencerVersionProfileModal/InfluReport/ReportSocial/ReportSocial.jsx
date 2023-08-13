import "./ReportSocial.css";
import { ReactComponent as Facebook } from "../../../../Assets/Icon/Facebook.svg";
import { ReactComponent as Instagram } from "../../../../Assets/Icon/Instagram.svg";
import { ReactComponent as Youtube } from "../../../../Assets/Icon/Youtube.svg";
import { ReactComponent as Tiktok } from "../../../../Assets/Icon/Tiktok.svg";
import { Input, Tooltip } from "antd";
import roundNumber from "../../../InfluUpdateProfileModal/roundNumber";

const ReportSocial = (influInfo) => {
  return (
    <>
      <div className="approve-report-social-layout">
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
                      influInfo?.influInfo?.influencerFollowers
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influInfo?.influencerFollowers)}
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
                      influInfo?.influInfo?.influencerEngagement
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influInfo?.influencerEngagement)}%
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
                        influInfo?.influInfo?.influencerCostEstimateFrom
                      ).toLocaleString("vi-VN")}
                    >
                      <span className="text-tooltip">
                        {influInfo?.influInfo?.influencerCostEstimateFrom
                          ?.length > 8
                          ? `${Number(
                              influInfo?.influInfo?.influencerCostEstimateFrom
                            )
                              .toLocaleString("vi-VN")
                              .slice(0, 10)}...`
                          : Number(
                              influInfo?.influInfo?.influencerCostEstimateFrom
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
                        influInfo?.influInfo?.influencerCostEstimateTo
                      ).toLocaleString("vi-VN")}
                    >
                      <span className="text-tooltip">
                        {influInfo?.influInfo?.influencerCostEstimateTo.length >
                        8
                          ? `${Number(
                              influInfo?.influInfo?.influencerCostEstimateTo
                            )
                              .toLocaleString("vi-VN")
                              .slice(0, 10)}...`
                          : Number(
                              influInfo?.influInfo?.influencerCostEstimateTo
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
                      influInfo?.influInfo?.influencerPostsPerWeek
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(
                        influInfo?.influInfo?.influencerPostsPerWeek
                      )}
                    </span>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="report-social-title">SOCIAL</p>
        <div className="report-social">
          <div className="social-icon-title">
            <Facebook className="social-icon" />
            <p>Facebook</p>
          </div>
          <div className="cover-follower-interaction">
            <div className="follower-interaction">
              <div className="interact-block">
                <Tooltip
                  placement="top"
                  title={Number(
                    influInfo?.influInfo?.influencerFollowFb
                  ).toLocaleString("vi-VN")}
                >
                  <span className="text-tooltip">
                    {roundNumber(influInfo?.influInfo?.influencerFollowFb)}
                  </span>
                </Tooltip>
              </div>

              <p>Followers</p>
            </div>
            <div className="follower-interaction">
              <div className="interact-block">
                <Tooltip
                  placement="top"
                  title={Number(
                    influInfo?.influInfo?.influencerInteractionFb
                  ).toLocaleString("vi-VN")}
                >
                  <span className="text-tooltip">
                    {roundNumber(influInfo?.influInfo?.influencerInteractionFb)}
                  </span>
                </Tooltip>
              </div>

              <p>Interactions</p>
            </div>
          </div>
        </div>
        <div className="report-social">
          <div className="social-icon-title">
            <Instagram className="social-icon" />
            <p>Instagram</p>
          </div>
          <div className="cover-follower-interaction">
            <div className="follower-interaction">
              <div className="interact-block">
                <Tooltip
                  placement="top"
                  title={Number(
                    influInfo?.influInfo?.influencerFollowInsta
                  ).toLocaleString("vi-VN")}
                >
                  <span className="text-tooltip">
                    {roundNumber(influInfo?.influInfo?.influencerFollowInsta)}
                  </span>
                </Tooltip>
              </div>

              <p>Followers</p>
            </div>
            <div className="follower-interaction">
              <div className="interact-block">
                <Tooltip
                  placement="top"
                  title={Number(
                    influInfo?.influInfo?.influencerInteractionInsta
                  ).toLocaleString("vi-VN")}
                >
                  <span className="text-tooltip">
                    {roundNumber(
                      influInfo?.influInfo?.influencerInteractionInsta
                    )}
                  </span>
                </Tooltip>
              </div>

              <p>Interactions</p>
            </div>
          </div>
        </div>
        <div className="report-social">
          <div className="social-icon-title">
            <Youtube className="social-icon" />
            <p>Youtube</p>
          </div>
          <div className="cover-follower-interaction">
            <div className="follower-interaction">
              <div className="interact-block">
                <Tooltip
                  placement="top"
                  title={Number(
                    influInfo?.influInfo?.influencerFollowYoutube
                  ).toLocaleString("vi-VN")}
                >
                  <span className="text-tooltip">
                    {roundNumber(influInfo?.influInfo?.influencerFollowYoutube)}
                  </span>
                </Tooltip>
              </div>

              <p>Subscribes</p>
            </div>
            <div className="follower-interaction">
              <div className="interact-block">
                <Tooltip
                  placement="top"
                  title={Number(
                    influInfo?.influInfo?.influencerInteractionYoutube
                  ).toLocaleString("vi-VN")}
                >
                  <span className="text-tooltip">
                    {roundNumber(
                      influInfo?.influInfo?.influencerInteractionYoutube
                    )}
                  </span>
                </Tooltip>
              </div>

              <p>Interactions</p>
            </div>
          </div>
        </div>
        <div className="report-social">
          <div className="social-icon-title">
            <Tiktok className="social-icon" />
            <p>Tiktok</p>
          </div>
          <div className="cover-follower-interaction">
            <div className="follower-interaction">
              <div className="interact-block">
                <Tooltip
                  placement="top"
                  title={Number(
                    influInfo?.influInfo?.influencerFollowTikTok
                  ).toLocaleString("vi-VN")}
                >
                  <span className="text-tooltip">
                    {roundNumber(influInfo?.influInfo?.influencerFollowTikTok)}
                  </span>
                </Tooltip>
              </div>
              <p>Followers</p>
            </div>
            <div className="follower-interaction">
              <div className="interact-block">
                <Tooltip
                  placement="top"
                  title={Number(
                    influInfo?.influInfo?.influencerInteractionTiktok
                  ).toLocaleString("vi-VN")}
                >
                  <span className="text-tooltip">
                    {roundNumber(
                      influInfo?.influInfo?.influencerInteractionTiktok
                    )}
                  </span>
                </Tooltip>
              </div>

              <p>Interactions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportSocial;
