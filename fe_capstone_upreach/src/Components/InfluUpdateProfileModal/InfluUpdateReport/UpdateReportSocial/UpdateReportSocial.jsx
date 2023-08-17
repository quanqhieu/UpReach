import "./UpdateReportSocial.css";
import React from "react";
import { ReactComponent as Facebook } from "../../../../Assets/Icon/Facebook.svg";
import { ReactComponent as Instagram } from "../../../../Assets/Icon/Instagram.svg";
import { ReactComponent as Youtube } from "../../../../Assets/Icon/Youtube.svg";
import { ReactComponent as Tiktok } from "../../../../Assets/Icon/Tiktok.svg";
import { EditOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import roundNumber from "../../roundNumber";

const UpdateReportSocial = ({
  influInfo,
  setInfluInfo,
  setIsChange,
  mokPreviewInflu,
}) => {
  const [edit, setEdit] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  const handleSubmit = () => {
    if (
      (edit === "facebook follower" &&
        parseInt(influInfo?.influencerFollowFb) <= 0) ||
      (edit === "instagram follower" &&
        parseInt(influInfo?.influencerFollowInsta) <= 0) ||
      (edit === "youtube follower" &&
        parseInt(influInfo?.influencerFollowYoutube) <= 0) ||
      (edit === "tiktok follower" &&
        parseInt(influInfo?.influencerFollowTikTok) <= 0) ||
      (edit === "facebook interaction" &&
        parseInt(influInfo?.influencerInteractionFb) <= 0) ||
      (edit === "instagram interaction" &&
        parseInt(influInfo?.influencerInteractionInsta) <= 0) ||
      (edit === "youtube interaction" &&
        parseInt(influInfo?.influencerInteractionYoutube) <= 0) ||
      (edit === "tiktok interaction" &&
        parseInt(influInfo?.influencerInteractionTiktok) <= 0) ||
      (edit === "engagement" &&
        parseInt(influInfo?.influencerEngagement) <= 0) ||
      (edit === "engagement" &&
        parseInt(influInfo?.influencerEngagement) > 100) ||
      (edit === "cost estimate from" &&
        parseInt(influInfo?.influencerCostEstimateFrom) <= 0) ||
      (edit === "cost estimate from" &&
        parseInt(influInfo?.influencerCostEstimateFrom) >
          parseInt(influInfo?.influencerCostEstimateTo)) ||
      (edit === "cost estimate to" &&
        parseInt(influInfo?.influencerCostEstimateTo) <= 0) ||
      (edit === "cost estimate to" &&
        parseInt(influInfo?.influencerCostEstimateFrom) >
          parseInt(influInfo?.influencerCostEstimateTo)) ||
      (edit === "post per week" &&
        parseInt(influInfo?.influencerPostsPerWeek) <= 0)
    ) {
      setIsError(true);
    } else {
      setEdit("");
    }
  };

  React.useEffect(() => {
    if (
      influInfo?.influencerFollowFb == mokPreviewInflu.influencerFollowFb &&
      influInfo?.influencerFollowInsta ==
        mokPreviewInflu.influencerFollowInsta &&
      influInfo?.influencerFollowYoutube ==
        mokPreviewInflu.influencerFollowYoutube &&
      influInfo?.influencerFollowTikTok ==
        mokPreviewInflu.influencerFollowTikTok &&
      influInfo?.influencerInteractionFb ==
        mokPreviewInflu.influencerInteractionFb &&
      influInfo?.influencerInteractionInsta ==
        mokPreviewInflu.influencerInteractionInsta &&
      influInfo?.influencerInteractionYoutube ==
        mokPreviewInflu.influencerInteractionYoutube &&
      influInfo?.influencerInteractionTiktok ==
        mokPreviewInflu.influencerInteractionTiktok &&
      influInfo?.influencerEngagement == mokPreviewInflu.influencerEngagement &&
      influInfo?.influencerCostEstimateFrom ==
        mokPreviewInflu.influencerCostEstimateFrom &&
      influInfo?.influencerCostEstimateTo ==
        mokPreviewInflu.influencerCostEstimateTo &&
      influInfo?.influencerPostsPerWeek ==
        mokPreviewInflu.influencerPostsPerWeek
    ) {
      setIsChange(false);
    } else {
      setIsChange(true);
    }
  }, [
    influInfo?.influencerFollowFb,
    influInfo?.influencerFollowInsta,
    influInfo?.influencerFollowYoutube,
    influInfo?.influencerFollowTikTok,
    influInfo?.influencerInteractionFb,
    influInfo?.influencerInteractionInsta,
    influInfo?.influencerInteractionYoutube,
    influInfo?.influencerInteractionTiktok,
    influInfo?.influencerEngagement,
    influInfo?.influencerCostEstimateFrom,
    influInfo?.influencerCostEstimateTo,
    influInfo?.influencerPostsPerWeek,
  ]);

  React.useEffect(() => {
    let sumFollowers = 0;

    if (influInfo?.influencerFollowFb) {
      sumFollowers += parseInt(influInfo?.influencerFollowFb);
    }
    if (influInfo?.influencerFollowInsta) {
      sumFollowers += parseInt(influInfo?.influencerFollowInsta);
    }
    if (influInfo?.influencerFollowTikTok) {
      sumFollowers += parseInt(influInfo?.influencerFollowTikTok);
    }
    if (influInfo?.influencerFollowYoutube) {
      sumFollowers += parseInt(influInfo?.influencerFollowYoutube);
    }
    influInfo.influencerFollowers = sumFollowers;
  }, [
    influInfo,
    influInfo?.influencerFollowFb,
    influInfo?.influencerFollowInsta,
    influInfo?.influencerFollowTikTok,
    influInfo?.influencerFollowYoutube,
  ]);

  return (
    <>
      <div className="update-report-social-layout">
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
                      {roundNumber(influInfo?.influencerFollowers)}
                    </span>
                  </Tooltip>
                </div>
              </div>

              <div className="report-general-content-item">
                <p>Engagement:</p>

                {edit === "engagement" ? (
                  <Input
                    onChange={(e) => {
                      setInfluInfo({
                        ...influInfo,
                        influencerEngagement: e.target.value,
                      });

                      setIsError(false);
                    }}
                    onBlur={handleSubmit}
                    type="number"
                    onPressEnter={handleSubmit}
                    value={influInfo.influencerEngagement}
                    maxLength={16}
                    style={{ width: "100px" }}
                    autoFocus
                    status={isError ? "error" : ""}
                  />
                ) : (
                  <div className="interact-block">
                    <Tooltip
                      placement="top"
                      title={Number(
                        influInfo?.influencerEngagement
                      ).toLocaleString("vi-VN")}
                    >
                      <span className="text-tooltip">
                        {roundNumber(influInfo?.influencerEngagement)}%
                      </span>
                    </Tooltip>
                    <EditOutlined
                      onClick={() => {
                        setEdit("engagement");
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="report-general-content-right">
              <div className="report-general-content-item">
                <div className="cost-estimate-edit-from">
                  <p>Cost estimate:</p>

                  {edit === "cost estimate from" ? (
                    <Input
                      disabled={edit !== "cost estimate from"}
                      onChange={(e) => {
                        setInfluInfo({
                          ...influInfo,
                          influencerCostEstimateFrom: e.target.value,
                        });

                        setIsError(false);
                      }}
                      onBlur={handleSubmit}
                      type="number"
                      onPressEnter={handleSubmit}
                      value={influInfo.influencerCostEstimateFrom}
                      maxLength={16}
                      style={{ width: "135px" }}
                      autoFocus
                      status={isError ? "error" : ""}
                    />
                  ) : (
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
                                .slice(0, 10)}...`
                            : Number(
                                influInfo?.influencerCostEstimateFrom
                              ).toLocaleString("vi-VN")}
                        </span>
                      </Tooltip>
                      <EditOutlined
                        onClick={() => {
                          setEdit("cost estimate from");
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="cost-estimate-edit-to">
                  <p>to</p>
                  {edit === "cost estimate to" ? (
                    <Input
                      onChange={(e) => {
                        setInfluInfo({
                          ...influInfo,
                          influencerCostEstimateTo: e.target.value,
                        });

                        setIsError(false);
                      }}
                      onBlur={handleSubmit}
                      type="number"
                      onPressEnter={handleSubmit}
                      value={influInfo.influencerCostEstimateTo}
                      maxLength={16}
                      style={{ width: "135px" }}
                      autoFocus
                      status={isError ? "error" : ""}
                    />
                  ) : (
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
                                .slice(0, 10)}...`
                            : Number(
                                influInfo?.influencerCostEstimateTo
                              ).toLocaleString("vi-VN")}
                        </span>
                      </Tooltip>
                      <EditOutlined
                        onClick={() => {
                          setEdit("cost estimate to");
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="report-general-content-item">
                <p>Post per week:</p>

                {edit === "post per week" ? (
                  <Input
                    onChange={(e) => {
                      setInfluInfo({
                        ...influInfo,
                        influencerPostsPerWeek: e.target.value,
                      });

                      setIsError(false);
                    }}
                    onBlur={handleSubmit}
                    type="number"
                    onPressEnter={handleSubmit}
                    value={influInfo.influencerPostsPerWeek}
                    maxLength={16}
                    style={{ width: "100px" }}
                    autoFocus
                    status={isError ? "error" : ""}
                  />
                ) : (
                  <div className="interact-block">
                    <Tooltip
                      placement="top"
                      title={Number(
                        influInfo?.influencerPostsPerWeek
                      ).toLocaleString("vi-VN")}
                    >
                      <span className="text-tooltip">
                        {roundNumber(influInfo?.influencerPostsPerWeek)}
                      </span>
                    </Tooltip>
                    <EditOutlined
                      onClick={() => {
                        setEdit("post per week");
                      }}
                    />
                  </div>
                )}
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
              {edit === "facebook follower" ? (
                <Input
                  onChange={(e) => {
                    setInfluInfo({
                      ...influInfo,
                      influencerFollowFb: e.target.value,
                    });

                    setIsError(false);
                  }}
                  onBlur={handleSubmit}
                  type="number"
                  onPressEnter={handleSubmit}
                  value={influInfo.influencerFollowFb}
                  maxLength={16}
                  style={{ width: "100px" }}
                  autoFocus
                  status={isError ? "error" : ""}
                />
              ) : (
                <div className="interact-block">
                  <Tooltip
                    placement="top"
                    title={Number(influInfo?.influencerFollowFb).toLocaleString(
                      "vi-VN"
                    )}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influencerFollowFb)}
                    </span>
                  </Tooltip>
                  <EditOutlined
                    onClick={() => {
                      setEdit("facebook follower");
                    }}
                  />
                </div>
              )}

              <p>Followers</p>
            </div>
            <div className="follower-interaction">
              {edit === "facebook interaction" ? (
                <Input
                  onChange={(e) => {
                    setInfluInfo({
                      ...influInfo,
                      influencerInteractionFb: e.target.value,
                    });
                    setIsError(false);
                  }}
                  onBlur={handleSubmit}
                  type="number"
                  onPressEnter={handleSubmit}
                  value={influInfo.influencerInteractionFb}
                  maxLength={16}
                  style={{ width: "100px" }}
                  autoFocus
                  status={isError ? "error" : ""}
                />
              ) : (
                <div className="interact-block">
                  <Tooltip
                    placement="top"
                    title={Number(
                      influInfo?.influencerInteractionFb
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influencerInteractionFb)}
                    </span>
                  </Tooltip>
                  <EditOutlined
                    onClick={() => {
                      setEdit("facebook interaction");
                    }}
                  />
                </div>
              )}
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
              {edit === "instagram follower" ? (
                <Input
                  onChange={(e) => {
                    setInfluInfo({
                      ...influInfo,
                      influencerFollowInsta: e.target.value,
                    });
                    setIsError(false);
                  }}
                  onBlur={handleSubmit}
                  type="number"
                  onPressEnter={handleSubmit}
                  value={influInfo.influencerFollowInsta}
                  maxLength={16}
                  style={{ width: "100px" }}
                  autoFocus
                  status={isError ? "error" : ""}
                />
              ) : (
                <div className="interact-block">
                  <Tooltip
                    placement="top"
                    title={Number(
                      influInfo?.influencerFollowInsta
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influencerFollowInsta)}
                    </span>
                  </Tooltip>

                  <EditOutlined
                    onClick={() => {
                      setEdit("instagram follower");
                    }}
                  />
                </div>
              )}
              <p>Followers</p>
            </div>
            <div className="follower-interaction">
              {edit === "instagram interaction" ? (
                <Input
                  onChange={(e) => {
                    setInfluInfo({
                      ...influInfo,
                      influencerInteractionInsta: e.target.value,
                    });
                    setIsError(false);
                  }}
                  onBlur={handleSubmit}
                  type="number"
                  onPressEnter={handleSubmit}
                  value={influInfo.influencerInteractionInsta}
                  maxLength={16}
                  style={{ width: "100px" }}
                  autoFocus
                  status={isError ? "error" : ""}
                />
              ) : (
                <div className="interact-block">
                  <Tooltip
                    placement="top"
                    title={Number(
                      influInfo?.influencerInteractionInsta
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influencerInteractionInsta)}
                    </span>
                  </Tooltip>
                  <EditOutlined
                    onClick={() => {
                      setEdit("instagram interaction");
                    }}
                  />
                </div>
              )}
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
              {edit === "youtube follower" ? (
                <Input
                  onChange={(e) => {
                    setInfluInfo({
                      ...influInfo,
                      influencerFollowYoutube: e.target.value,
                    });
                    setIsError(false);
                  }}
                  onBlur={handleSubmit}
                  type="number"
                  onPressEnter={handleSubmit}
                  value={influInfo.influencerFollowYoutube}
                  maxLength={16}
                  style={{ width: "100px" }}
                  autoFocus
                  status={isError ? "error" : ""}
                />
              ) : (
                <div className="interact-block">
                  <Tooltip
                    placement="top"
                    title={Number(
                      influInfo?.influencerFollowYoutube
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influencerFollowYoutube)}
                    </span>
                  </Tooltip>
                  <EditOutlined
                    onClick={() => {
                      setEdit("youtube follower");
                    }}
                  />
                </div>
              )}
              <p>Subscribes</p>
            </div>
            <div className="follower-interaction">
              {edit === "youtube interaction" ? (
                <Input
                  onChange={(e) => {
                    setInfluInfo({
                      ...influInfo,
                      influencerInteractionYoutube: e.target.value,
                    });
                    setIsError(false);
                  }}
                  onBlur={handleSubmit}
                  type="number"
                  onPressEnter={handleSubmit}
                  value={influInfo.influencerInteractionYoutube}
                  maxLength={16}
                  style={{ width: "100px" }}
                  autoFocus
                  status={isError ? "error" : ""}
                />
              ) : (
                <div className="interact-block">
                  <Tooltip
                    placement="top"
                    title={Number(
                      influInfo?.influencerInteractionYoutube
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influencerInteractionYoutube)}
                    </span>
                  </Tooltip>
                  <EditOutlined
                    onClick={() => {
                      setEdit("youtube interaction");
                    }}
                  />
                </div>
              )}
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
              {edit === "tiktok follower" ? (
                <Input
                  onChange={(e) => {
                    setInfluInfo({
                      ...influInfo,
                      influencerFollowTikTok: e.target.value,
                    });
                    setIsError(false);
                  }}
                  onBlur={handleSubmit}
                  type="number"
                  onPressEnter={handleSubmit}
                  value={influInfo.influencerFollowTikTok}
                  maxLength={16}
                  style={{ width: "100px" }}
                  autoFocus
                  status={isError ? "error" : ""}
                />
              ) : (
                <div className="interact-block">
                  <Tooltip
                    placement="top"
                    title={Number(
                      influInfo?.influencerFollowTikTok
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influencerFollowTikTok)}
                    </span>
                  </Tooltip>
                  <EditOutlined
                    onClick={() => {
                      setEdit("tiktok follower");
                    }}
                  />
                </div>
              )}
              <p>Followers</p>
            </div>
            <div className="follower-interaction">
              {edit === "tiktok interaction" ? (
                <Input
                  onChange={(e) => {
                    setInfluInfo({
                      ...influInfo,
                      influencerInteractionTiktok: e.target.value,
                    });
                    setIsError(false);
                  }}
                  onBlur={handleSubmit}
                  type="number"
                  onPressEnter={handleSubmit}
                  value={influInfo.influencerInteractionTiktok}
                  maxLength={16}
                  style={{ width: "100px" }}
                  autoFocus
                  status={isError ? "error" : ""}
                />
              ) : (
                <div className="interact-block">
                  <Tooltip
                    placement="top"
                    title={Number(
                      influInfo?.influencerInteractionTiktok
                    ).toLocaleString("vi-VN")}
                  >
                    <span className="text-tooltip">
                      {roundNumber(influInfo?.influencerInteractionTiktok)}
                    </span>
                  </Tooltip>
                  <EditOutlined
                    onClick={() => {
                      setEdit("tiktok interaction");
                    }}
                  />
                </div>
              )}
              <p>Interactions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateReportSocial;
