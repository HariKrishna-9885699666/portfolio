// Basic Markdoc renderer to bypass DocumentRenderer issues if they persist
const SimpleRenderer = ({ nodes }: { nodes: any[] | null }) => {
  if (!nodes || !Array.isArray(nodes)) return null;
  return (
    <>
      {nodes.map((node: any, i: number) => {
        if (!node) return null;
        switch (node.type) {
          case 'paragraph':
            return <p key={i}><SimpleRenderer nodes={node.children} /></p>;
          case 'text':
            return <span key={i}>{node.attributes?.content || ''}</span>;
          case 'strong':
            return <strong key={i}><SimpleRenderer nodes={node.children} /></strong>;
          case 'list':
            return <ul key={i} className="list-unstyled"><SimpleRenderer nodes={node.children} /></ul>;
          case 'item':
            return <li key={i} style={{ marginBottom: '10px' }}>- <SimpleRenderer nodes={node.children} /></li>;
          case 'inline':
            return <SimpleRenderer key={i} nodes={node.children} />;
          case 'hr':
            return <hr key={i} />;
          default:
            // Recursively render children if they exist
            if (node.children) return <SimpleRenderer key={i} nodes={node.children} />;
            return null;
        }
      })}
    </>
  );
};

interface AboutProps {
  profile?: {
    readonly bio?: any;
  } | null;
}

export const About = ({ profile }: AboutProps) => {
    return (
        <section id="about" className="about-area section-padding40">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="about-caption mb-50">
                            {/* Section Tittle */}
                            <div className="section-tittle mb-35">
                                <h2>About</h2>
                            </div>
                            <div className="bio-content">
                                {profile?.bio ? (
                                    <SimpleRenderer nodes={profile.bio} />
                                ) : (
                                    <p>-</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="/img/profile-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className="row pt-40">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="experience">
                            <span>06 years</span>
                            <p>of experience</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="experience">
                            <span>$40M+</span>
                            <p>invested in projects I was<br /> involved in</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="experience">
                            <span>Multiple</span>
                            <p>industry awards</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};
