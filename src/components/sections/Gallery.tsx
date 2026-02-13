interface ProjectItem {
  readonly title?: string | null;
  readonly thumbnail?: string | null;
  slug: string;
}

interface GalleryProps {
  projects?: ProjectItem[] | null;
}

export const Gallery = ({ projects }: GalleryProps) => {
    const defaultImages = [
        { src: "/img/gallery/gallery1.png", thumb: "/img/gallery/gallery1.png" },
        { src: "/img/gallery/gallery2.png", thumb: "/img/gallery/gallery2.png" },
        { src: "/img/gallery/gallery3.png", thumb: "/img/gallery/gallery2.png" },
        { src: "/img/gallery/gallery4.png", thumb: "/img/gallery/gallery3.png" }
    ];

    return (
        <div className="gallery-area section-padding40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle mb-60">
                            <h2>Selected Portfolios</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    {(projects && projects.length > 0 ? projects.map(p => ({ src: p.thumbnail || "/img/gallery/gallery1.png", thumb: p.thumbnail || "/img/gallery/gallery1.png" })) : defaultImages).map((img, index) => (
                        <div key={index} className={`${index % 2 === 0 ? 'offset-xl-1 col-xl-5' : 'col-xl-5'} col-lg-6 col-md-6 col-sm-6`}>
                            <div className="box snake mb-30">
                                <div className="gallery-img small-img" style={{ backgroundImage: `url(${img.src})` }}></div>
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <a href={img.thumb} className="img-pop-up"><i className="ti-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
