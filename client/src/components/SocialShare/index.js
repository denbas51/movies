import { Stack } from "@mui/material"
import PropTypes from "prop-types"
import { SOCIAL_BUTTON_SIZE } from "../../const"
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share"

const SocialShare = ({ url, title }) => (
  <Stack direction="row" spacing={1}>
    <FacebookShareButton url={url}>
      <FacebookIcon round size={SOCIAL_BUTTON_SIZE} />
    </FacebookShareButton>
    <TwitterShareButton url={url} title={title}>
      <TwitterIcon round size={SOCIAL_BUTTON_SIZE} />
    </TwitterShareButton>
  </Stack>
)

SocialShare.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
}

export default SocialShare
