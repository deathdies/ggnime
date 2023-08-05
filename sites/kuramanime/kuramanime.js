const express = require("express");
const router = express.Router();
const {
  getSearchAnime,
  getRecentRelease,
  getOngoingAnime,
  getScheeduleAnime,
  getPropertiesAnime,
  getPropertiesGenre,
  getDetailsAnime,
  getAnimeEpisode,
} = require("./grabber");

router.get("/", function (req, res) {
  res.end(JSON.stringify({
     message: "😍 GG Nime Server => 1 is Ready! 🚀",
  }, null, 1));
});
router.get("/search", getSearchAnime);
router.get("/recent", getRecentRelease);
router.get("/ongoing", getOngoingAnime);
router.get("/schedule", getScheeduleAnime);
router.get("/properties", getPropertiesAnime);
router.get("/properties/genre/:genreName", getPropertiesGenre);
router.get("/details/anime/:animeId/:animeIdTitle", getDetailsAnime);
router.get("/watch/anime/:animeName/:animeId/episode/:episodeId", getAnimeEpisode);

module.exports = router;
