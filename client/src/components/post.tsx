type IProps = {
  index: number;
};

export const Post = ({ index }: IProps) => {
  return (
    <div className="post" key={index}>
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/11/xAI-Grok-GettyImages-1765893916.jpeg?resize=1200,800"
          alt=""
        />
      </div>
      <div className="content">
        <h2>You can now react to messages on Gmail</h2>
        <p className="info">
          <a href="" className="author">
            David Beckham
          </a>
          <time>2025-01-03 11:32</time>
        </p>
        <p className="summary">
          Today at it's special launch event, home backup power giant EcoFlow
          launched a flurry of new products, including a 'Whole-home Backup
          Power Solution'
        </p>
      </div>
    </div>
  );
};
