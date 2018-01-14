/**
 * 2018-1-10 sunzhiyue
 */
import React from 'react';
import { Segment, Image, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Cardcontent from '../components/semantic/Cardcontent/Cardcontent';
import styles from './aignment.less';

const Example = () => (
  <div>
    <div id={styles.nav} >
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
      <Cardcontent />
    </div>
    <div className={styles.button}><Button sizc="big" basic >加载更多</Button></div>
  </div>
);

export default Example;
