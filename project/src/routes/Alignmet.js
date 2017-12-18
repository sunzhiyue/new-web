import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
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
          <a href="" >
            <img alt="图片" src="http://isujin.com/wp-content/themes/Diaspora/timthumb/timthumb.php?src=http://isujin.com/wp-content/uploads/2017/09/wallhaven-241627.jpg" size="big" />
          </a>
          <div className={styles.else}>
            <p>九月 19，2017</p>
            <h3><a href="">我是占位符</a></h3>
            <p>占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符占位符。。。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderExampleTextAlignment;
