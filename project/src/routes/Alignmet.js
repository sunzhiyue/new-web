import React from 'react';
import { Header, Segment, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

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
  <Segment>
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
