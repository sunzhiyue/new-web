import React from 'react';
import { Icon } from 'semantic-ui-react';
import styles from './Cardcontent.less';

class Cardcontent extends React.Component {
  render() {
    return (
      <div className={styles.primary}>
        <div className={styles.post}>
          <div className={styles.img}>
            <a href="" ><img alt="图片" src="http://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=http://isujin.com/wp-content/uploads/2017/09/wallhaven-241627.jpg" size="big" /></a>
          </div>
          <div className={styles.else}>
            <p>九月 19，2017</p>
            <h3><a href="">我终于瘦下来了，却不再喜欢你</a></h3>
            <p className={styles.content}>01 许桐最大的毛病就是贪吃。
            她尤其喜欢吃甜<br />食，精致的蛋糕、松软的面包、酥脆的饼干都是她<br />的心头好...</p>
            <div className={styles.icon}>
              <Icon color="grey" name="edit" />111
              <Icon color="grey" name="unhide" />222
              <Icon color="grey" name="heart" />10
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cardcontent;
