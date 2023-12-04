import { Alert, Container } from "react-bootstrap";

export function Home(){
    return (
        <Container className="mt-5">
            <Alert variant="success">
                <h1>Welcome to Home</h1>
            </Alert>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quam, quisquam vitae, rem sint architecto nulla accusamus molestiae quidem numquam fugit saepe nisi excepturi minima in blanditiis animi ratione quos?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti magni perferendis officia unde illo aspernatur reprehenderit modi provident ad aliquid necessitatibus corrupti ipsam excepturi dignissimos natus, voluptates, voluptate facere praesentium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores exercitationem asperiores, praesentium deserunt molestias delectus reiciendis officia saepe aliquid veritatis consectetur culpa ipsum alias ducimus voluptatem minus facilis ad.
            </p>
        </Container>
    );
}