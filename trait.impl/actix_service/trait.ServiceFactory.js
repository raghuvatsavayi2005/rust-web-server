(function() {var implementors = {
"actix_files":[["impl ServiceFactory&lt;<a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_files/struct.Files.html\" title=\"struct actix_files::Files\">Files</a>"],["impl ServiceFactory&lt;<a class=\"struct\" href=\"actix_web/service/struct.ServiceRequest.html\" title=\"struct actix_web::service::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_files/struct.NamedFile.html\" title=\"struct actix_files::NamedFile\">NamedFile</a>"]],
"actix_http":[["impl&lt;T, S, B, X, U&gt; ServiceFactory&lt;(T, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/net/socket_addr/enum.SocketAddr.html\" title=\"enum core::net::socket_addr::SocketAddr\">SocketAddr</a>&gt;)&gt; for <a class=\"struct\" href=\"actix_http/h1/struct.H1Service.html\" title=\"struct actix_http::h1::H1Service\">H1Service</a>&lt;T, S, B, X, U&gt;<div class=\"where\">where\n    T: AsyncRead + AsyncWrite + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,\n    S: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,\n    S::Future: 'static,\n    S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"struct\" href=\"actix_http/body/struct.BoxBody.html\" title=\"struct actix_http::body::BoxBody\">BoxBody</a>&gt;&gt;,\n    S::Response: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;&gt;,\n    S::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    B: <a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a>,\n    X: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Response = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;,\n    X::Future: 'static,\n    X::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"struct\" href=\"actix_http/body/struct.BoxBody.html\" title=\"struct actix_http::body::BoxBody\">BoxBody</a>&gt;&gt;,\n    X::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    U: ServiceFactory&lt;(<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Framed&lt;T, <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>&gt;), Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Response = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,\n    U::Future: 'static,\n    U::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"struct\" href=\"actix_http/body/struct.BoxBody.html\" title=\"struct actix_http::body::BoxBody\">BoxBody</a>&gt;&gt;,\n    U::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div>"],["impl&lt;T&gt; ServiceFactory&lt;(<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Framed&lt;T, <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>&gt;)&gt; for <a class=\"struct\" href=\"actix_http/h1/struct.UpgradeHandler.html\" title=\"struct actix_http::h1::UpgradeHandler\">UpgradeHandler</a>"],["impl&lt;T, S, B&gt; ServiceFactory&lt;(T, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/net/socket_addr/enum.SocketAddr.html\" title=\"enum core::net::socket_addr::SocketAddr\">SocketAddr</a>&gt;)&gt; for <a class=\"struct\" href=\"actix_http/h2/struct.H2Service.html\" title=\"struct actix_http::h2::H2Service\">H2Service</a>&lt;T, S, B&gt;<div class=\"where\">where\n    T: AsyncRead + AsyncWrite + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,\n    S: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,\n    S::Future: 'static,\n    S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"struct\" href=\"actix_http/body/struct.BoxBody.html\" title=\"struct actix_http::body::BoxBody\">BoxBody</a>&gt;&gt; + 'static,\n    S::Response: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;&gt; + 'static,\n    &lt;S::Service as Service&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;&gt;::Future: 'static,\n    B: <a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a> + 'static,</div>"],["impl ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt; for <a class=\"struct\" href=\"actix_http/h1/struct.ExpectHandler.html\" title=\"struct actix_http::h1::ExpectHandler\">ExpectHandler</a>"],["impl&lt;T, S, B, X, U&gt; ServiceFactory&lt;(T, <a class=\"enum\" href=\"actix_http/enum.Protocol.html\" title=\"enum actix_http::Protocol\">Protocol</a>, <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/net/socket_addr/enum.SocketAddr.html\" title=\"enum core::net::socket_addr::SocketAddr\">SocketAddr</a>&gt;)&gt; for <a class=\"struct\" href=\"actix_http/struct.HttpService.html\" title=\"struct actix_http::HttpService\">HttpService</a>&lt;T, S, B, X, U&gt;<div class=\"where\">where\n    T: AsyncRead + AsyncWrite + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,\n    S: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,\n    S::Future: 'static,\n    S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"struct\" href=\"actix_http/body/struct.BoxBody.html\" title=\"struct actix_http::body::BoxBody\">BoxBody</a>&gt;&gt; + 'static,\n    S::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    S::Response: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;B&gt;&gt; + 'static,\n    &lt;S::Service as Service&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;&gt;::Future: 'static,\n    B: <a class=\"trait\" href=\"actix_http/body/trait.MessageBody.html\" title=\"trait actix_http::body::MessageBody\">MessageBody</a> + 'static,\n    X: ServiceFactory&lt;<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Response = <a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>&gt;,\n    X::Future: 'static,\n    X::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"struct\" href=\"actix_http/body/struct.BoxBody.html\" title=\"struct actix_http::body::BoxBody\">BoxBody</a>&gt;&gt;,\n    X::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    U: ServiceFactory&lt;(<a class=\"struct\" href=\"actix_http/struct.Request.html\" title=\"struct actix_http::Request\">Request</a>, Framed&lt;T, <a class=\"struct\" href=\"actix_http/h1/struct.Codec.html\" title=\"struct actix_http::h1::Codec\">Codec</a>&gt;), Config = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Response = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,\n    U::Future: 'static,\n    U::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_http/struct.Response.html\" title=\"struct actix_http::Response\">Response</a>&lt;<a class=\"struct\" href=\"actix_http/body/struct.BoxBody.html\" title=\"struct actix_http::body::BoxBody\">BoxBody</a>&gt;&gt;,\n    U::InitError: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div>"]],
"actix_web":[["impl <a class=\"trait\" href=\"actix_web/dev/trait.ServiceFactory.html\" title=\"trait actix_web::dev::ServiceFactory\">ServiceFactory</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/struct.Route.html\" title=\"struct actix_web::Route\">Route</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()