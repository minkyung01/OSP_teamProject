import UncheckedBox from '../assets/uncheckBox.png';
import CheckedBox from '../assets/checkBox.png';
import BackArrow from '../assets/back_arrow.png';
import Cake_1 from '../assets/cakeSticker_1.png';
import Cake_2 from '../assets/cakeSticker_2.png';
import Cake_3 from '../assets/cakeSticker_3.png';
import check from '../assets/check.png';
import coffeeBean from '../assets/coffeeBean.png';
import WaterIcon from '../assets/water.png';
import BeanIcon from '../assets/coffeeBean.png';
import AmericanoIcon from '../assets/coffee.png';
import Share from '../assets/shared.png';
import Up from '../assets/up.png';
import Down from '../assets/down.png';
import Edit from '../assets/edit.png';

export const iconImages = {
    uncompleted: UncheckedBox,
    completed: CheckedBox,
    backArrow: BackArrow,
    share: Share,
    up: Up,
    down: Down,
    edit: Edit,
};
export const levelImages = {
    Water: WaterIcon,
    CoffeeBean: BeanIcon,
    Americano: AmericanoIcon
};

export const stickerImages = {
    Water : [check],
    CoffeeBean : [check, coffeeBean],
    Americano : [check, coffeeBean, Cake_1, Cake_2, Cake_3],
};