import './App.css';
import Dropdown from './components/common/Dropdown';
import MainLayout from './components/common/MainLayout';
import Panel, { PanelBody, PanelCap, PanelFooter, PanelHeader } from './components/common/Panel';
import Tabs, { Tab, TabList, TabPanel, TabPanels } from './components/common/Tabs';
import QuestionEditor from './components/edit/QuestionEditor';

function App() {
  return (
    <>
      <MainLayout>
        <Tabs>
          <TabList>
            <Tab index={0}>tab1</Tab>
            <Tab index={1}>tab2</Tab>
          </TabList>
          <TabPanels>
            <QuestionEditor />
          </TabPanels>
        </Tabs>
      </MainLayout>
    </>
  );
}

export default App;
