
import React from 'react'

// Components 
import Page from '../../components/page'
import PageHeader from '../../components/pageHeader'
import PageBody from '../../components/pageBody'
import SidePanel from '../../components/sidePanel'
import MainPanel from '../../components/mainPanel'

// Tools
import Sorting from './sorting'
import Brands from './brands'
import Tags from './tags'
import Basket from './basket'

function Home() {
  return (
    <Page>
        <PageHeader title="" basket=""/>
        <PageBody>
            <SidePanel>
                <Sorting title="Sorting"/>    
                <Brands title="Brands"/>  
                <Tags title="Tags"/>                       
            </SidePanel>
            <MainPanel>
                test
            </MainPanel>
            <SidePanel>
                <Basket />  
            </SidePanel>
        </PageBody>
    </Page>
  );
}

export default Home;
