import React from 'react';
import { Header, Segment, Dropdown, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styles from './aignment.less';

const options = [
    { key: 'angular', text: 'Angular', value: 'angular' },
    { key: 'css', text: 'CSS', value: 'css' },
    { key: 'design', text: 'Graphic Design', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
];
const HeaderExampleTextAlignment = () => (
  <Segment style={{ padding: '0' }}>
    <div style={{ position: 'relative', padding: '0' }}>
      <Image src="http://isujin.com/wp-content/uploads/2017/11/wallhaven-557971.jpg"fluid />
      <svg viewBox="0 0 2880 1620" height="100%" preserveAspectRatio="xMaxYMax slice" className={styles.svg} >
        <polygon opacity="0.5" points="2000,1620 0,1620 0,0 600,0 " style={{ fill: 'rgb(82, 4, 87)' }} />
      </svg>
    </div>
    <Header as="h3" textAlign="right">
      Float Right
    </Header>
    <Header as="h3" textAlign="left">
      Float Left
    </Header>
    <Header as="h3" textAlign="justified">
      This text takes up the full width of the container
    </Header>
    <Header as="h3" textAlign="center">
      Centered
    </Header>
    <Dropdown placeholder="多选" fluid multiple selection options={options} />
  </Segment>

);

export default HeaderExampleTextAlignment;
