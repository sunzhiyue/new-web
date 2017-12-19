import React from 'react';
import { Segment, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Cardcontent from '../components/Cardcontent/Cardcontent';
import styles from './aignment.less';

const HeaderExampleTextAlignment = () => (
  <div>
    <div className={styles.nav} >
      <ul className={styles.list}>
        <li><a href="">联系我们</a></li>
        <li><a href="">联系我们</a></li>
        <li><a href="">联系我们</a></li>
        <li><a href="">联系我们</a></li>
        <li><a href="">联系我们</a></li>
        <li><a href="">联系我们</a></li>
      </ul>
      <p>© 2017 素锦. Powered by WordPress</p>
    </div>
    <div className={styles.container}>
      <Segment style={{ padding: '0' }}>
        <div style={{ position: 'relative', padding: '0' }}>
          <Image src="http://isujin.com/wp-content/uploads/2017/11/wallhaven-557971.jpg"fluid />
          <svg viewBox="0 0 2880 1620" height="100%" preserveAspectRatio="xMaxYMax slice" className={styles.svg} >
            <polygon opacity="0.5" points="2000,1620 0,1620 0,0 600,0 " style={{ fill: 'rgb(82, 4, 87)' }} />
          </svg>
          <div className={styles.post0}>
            <p>十一月</p>
            <h2><a href="">我是占位符</a></h2>
            <p>占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符。。。</p>
          </div>
        </div>
      </Segment>
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
              <Icon name="edit" />111
              <Icon name="unhide" />222
              <Icon name="heart" />10
            </div>
          </div>
        </div>
      </div>
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
      <Cardcontent />
    </div>
  </div>
);

export default HeaderExampleTextAlignment;
