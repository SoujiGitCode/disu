import Lottie from "lottie-react";
import fav from "./animations/fav.json"
import shopping from "./animations/shopping.json"
import stonks from "./animations/stonks.json"
import saving from "./animations/saving.json"
import piggy from "./animations/piggy.json"
import bags from "./animations/bags.json"

const LottieContainer = ({name}) => {
    const animations = {
        fav: fav, shopping: shopping, stonks: stonks, saving: saving, piggy : piggy, bags: bags
    }

    const animation = animations[name] || animations['fav'];

    return <Lottie animationData={animation}/>;
};

export default LottieContainer;