import {} from '@chakra-ui/icons';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import { ColumnType } from './utils/enums';

function App() {
  return (
    <main>
      <Heading
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        mt={4}
      >
        Welcome to DnD Kanban
      </Heading>
      <DarkModeIconButton position="absolute" top={0} right={2} />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={8} py={12}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 4, md: 2 }}
          >
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.COMPLETED} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;
