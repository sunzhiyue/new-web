/**
 * sunzhiyue 2018-1-9
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'dva';
import styles from './Cardcontent.less';

class Cardcontent extends React.Component {
  render() {
    const { allContent } = this.props;
    return (
      <div className={styles.primary}>
        {
          allContent.map(item => (
            <div className={styles.post}>
              <div className={styles.img}>
                <a href="" ><img alt="图片" src={item.src}size="big" /></a>
              </div>
              <div className={styles.else}>
                <p>{item.date}</p>
                <h3><a href="">{item.name}</a></h3>
                <p className={styles.content}>{item.cardContent}</p>
                <div className={styles.icon}>
                  <Icon color="grey" name="edit" />{item.edit}
                  <Icon color="grey" name="unhide" />{item.unhide}
                  <Icon color="grey" name="heart" />{item.heart}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
export default connect(state => ({
  allContent: state.example.allContent,
}))(Cardcontent);
