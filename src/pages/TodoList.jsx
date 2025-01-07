import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
} from '@mui/material';

function TodoList() {
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    if (desc.trim() !== '') {
      setTodos([...todos, desc]);
      setDesc('');
    }
  }

  function handleDelete(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <Container
      maxWidth="sm"
      style={{
        border: '2px solid #333333',
        borderRadius: '10px',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Typography
        variant="h3"
        color="primary"
        fontSize={40}
        fontWeight={700}
        gutterBottom
        style={{
          marginTop: '22px',
          marginBottom: '22px',
        }}
      >
        ToDo List
      </Typography>
      <TextField
        onChange={(e) => setDesc(e.target.value)}
        value={desc} // Input qiymatini boshqarish
        fullWidth
        label="Add a new task"
        color="secondary"
        focused
      />
      <Button
        onClick={handleClick}
        style={{
          marginTop: '22px',
        }}
        variant="outlined"
      >
        Add Todo
      </Button>

      {/* ToDo ro'yxatini chiqarish */}
      <div style={{ marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <Card
            key={index}
            style={{
              marginBottom: '10px',
              backgroundColor: '#f5f5f5',
              textAlign: 'left',
              position: 'relative',
            }}
          >
            <CardContent>
              <Typography variant="body1">{todo}</Typography>
              <Button
                variant="contained"
                color="error"
                size="small"
                style={{ position: 'absolute', top: '10px', right: '10px' }}
                onClick={() => handleDelete(index)}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default TodoList;
