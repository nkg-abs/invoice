import React from 'react';
import './App.css';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  frame: {
    width: '100vw',
    height: '100vh'
  },
  header: {
    backgroundColor: 'burlywood',
  },
  footer: {
    backgroundColor: 'violet',
  },
  body: {
    backgroundColor: 'mediumspringgreen',
    flexGrow: 1,
  },
  pdfLayout: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }
});

const Header = () => <>
  <View style={ styles.header }>
    <Text>Header</Text>
  </View>
  </>;
const Body = () => <>
  <View style={ styles.body }>
    <Text>Body</Text>
  </View>
</>;
const Footer = () => <>
  <View style={ styles.footer }>
    <Text>Footer</Text>
  </View>
</>;


// Create Document Component
const App = () => <PDFViewer style={ styles.frame }>
<Document>
  <Page size="A4" style={ styles.pdfLayout }>
    <Header />
    <Body />
    <Footer />
  </Page>
</Document>
</PDFViewer>;

export default App;