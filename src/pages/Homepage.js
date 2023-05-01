import { Container } from 'react-bootstrap';
import AppHeader from '../components/AppHeader';
import PageTitle from '../components/PageTitle';
import TodoContent from '../components/TodoContent';
import Header from '../common';

function Homepage() {
  return (
    <>
      <Header />
      <Container>
        <PageTitle>TASK LIST</PageTitle>
        <AppHeader />
        <TodoContent />
      </Container>
    </>
  );
}

export default Homepage;
