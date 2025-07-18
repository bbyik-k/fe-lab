import './App.css';
import MainLayout from './components/common/MainLayout';
import Tabs, { Tab, TabList, TabPanels } from './components/common/Tabs';
import SectionEditorList from './components/edit/SectionEditorList.';
import { SurveyStoreProvider } from './store';

function App() {
  return (
    <>
      <MainLayout>
        <SurveyStoreProvider>
          <Tabs>
            <TabList>
              <Tab index={0}>tab1</Tab>
              <Tab index={1}>tab2</Tab>
            </TabList>
            <TabPanels>
              <SectionEditorList />
            </TabPanels>
          </Tabs>
        </SurveyStoreProvider>
      </MainLayout>
    </>
  );
}

export default App;
