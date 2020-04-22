import React from 'react';
import { Container, Row, Col, Card, CardColumns } from 'react-bootstrap';
import HeadSection from '../layout/HeadSection';

function Blog() {
  const posts = [
    {
      id: 0,
      auther: 'Alexander Arcombe',
      date: '04/10',
      title: 'Blog Post One',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis officia eligendi iste at minima ipsum, rem unde dolorum error aperiam consequatur corrupti nulla cum vitae aut debitis sit accusantium.',
      image: 'https://source.unsplash.com/random/300x200',
    },
    {
      id: 1,
      auther: 'Anonymous',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde debitis vitae culpa odio dignissimos, repellendus delectus doloremque repellat rerum.',
    },
    {
      id: 2,
      auther: 'Famous Person at Stack Overflow',
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur vel iusto et cupiditate dolor ducimus suscipit illo recusandae ab est!',
    },
    {
      id: 3,
      auther: 'Patrik Person',
      date: '04/11',
      title: 'Blog Post Two',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque modi rem nostrum! Deserunt sunt, accusamus, doloribus consequatur repudiandae provident inventore magnam, ratione aut iusto sequi tempore ipsa nobis corporis!',
      image: 'https://source.unsplash.com/random/301x200',
    },
    {
      id: 4,
      auther: 'Alexander Arcombe',
      date: '04/20',
      title: 'Blog Post Three',
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, accusamus delectus explicabo amet, ullam officia consequatur mollitia molestias est quos dolor modi eligendi porro sequi repellat eaque nam necessitatibus atque maiores? Dolor natus soluta et.',
      image: 'https://source.unsplash.com/random/302x200',
    },

    {
      id: 5,
      auther: 'Rochi Vidal',
      date: '04/22',
      title: 'Blog Post Four',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet unde dicta neque nihil consequuntur harum.',
      image: 'https://source.unsplash.com/random/299x200',
    },
    {
      id: 6,
      auther: 'Anonymous',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores mollitia officiis magni quis culpa facilis quia optio officia deleniti dolorem.',
    },
    {
      id: 7,
      auther: 'Sebastian Andersson',
      date: '04/23',
      title: 'Blog Post Five',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate praesentium ratione reiciendis deleniti quod placeat nostrum molestias nemo aperiam voluptas eveniet eos quaerat, blanditiis, impedit dolor laborum officia!',
      image: 'https://source.unsplash.com/random/300x201',
    },
  ];

  const cards = posts.map((post) => {
    return (
      <Card key={post.id}>
        {post.image && <Card.Img src={post.image} />}
        <Card.Body>
          {post.title && (
            <>
              <Card.Title>{post.title}</Card.Title>
              <small>
                Posted by {post.auther} on {post.date}
              </small>
              <hr />
            </>
          )}
          <p>{post.text}</p>
          {!post.title && <small>- {post.auther}</small>}
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <HeadSection
        title="Read Our Blog"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex atque cum excepturi exercitationem, dolorem dolorum?"
      />

      <Container className="my-5">
        <Row>
          <Col>
            <CardColumns>{cards}</CardColumns>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blog;
