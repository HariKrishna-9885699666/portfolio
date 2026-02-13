import Script from "next/script";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Template CSS */}
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/owl.carousel.min.css" />
      <link rel="stylesheet" href="/css/slicknav.css" />
      <link rel="stylesheet" href="/css/flaticon.css" />
      <link rel="stylesheet" href="/css/progressbar_barfiller.css" />
      <link rel="stylesheet" href="/css/gijgo.css" />
      <link rel="stylesheet" href="/css/animate.min.css" />
      <link rel="stylesheet" href="/css/animated-headline.css" />
      <link rel="stylesheet" href="/css/magnific-popup.css" />
      <link rel="stylesheet" href="/css/fontawesome-all.min.css" />
      <link rel="stylesheet" href="/css/themify-icons.css" />
      <link rel="stylesheet" href="/css/slick.css" />
      <link rel="stylesheet" href="/css/nice-select.css" />
      <link rel="stylesheet" href="/css/style.css" />


      {children}

      {/* Scroll Up */}
      <div id="back-top">
          <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
      </div>

      {/* JS here */}
      <Script src="/js/vendor/modernizr-3.5.0.min.js" strategy="beforeInteractive" />
      <Script src="/js/vendor/jquery-1.12.4.min.js" strategy="beforeInteractive" />
      <Script src="/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.slicknav.min.js" strategy="afterInteractive" />
      <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/js/animated.headline.js" strategy="afterInteractive" />
      <Script src="/js/jquery.magnific-popup.js" strategy="afterInteractive" />
      <Script src="/js/gijgo.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.nice-select.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.sticky.js" strategy="afterInteractive" />
      <Script src="/js/jquery.barfiller.js" strategy="afterInteractive" />
      <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
      <Script src="/js/waypoints.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.countdown.min.js" strategy="afterInteractive" />
      <Script src="/js/hover-direction-snake.min.js" strategy="afterInteractive" />
      
      {/* Contact Form Plugins - Order is important */}
      <Script src="/js/jquery.form.js" strategy="afterInteractive" />
      <Script src="/js/jquery.validate.min.js" strategy="afterInteractive" />
      <Script src="/js/contact.js" strategy="afterInteractive" />
      <Script src="/js/mail-script.js" strategy="afterInteractive" />
      <Script src="/js/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
      
      <Script src="/js/plugins.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
