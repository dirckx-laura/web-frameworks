<html>
<body>
<h2>Hello World!</h2>
<form method="POST">
    <input type="checkbox" name="lector" value="test">test</br>
    <input type="checkbox" name="lector" value="Laura">Laura</br>
    <button type="submit">indienen</button>
</form>
<%
String[] lectoren = request.getParameterValues("lector");
if(lectoren != null){
    out.print("<ul>");
    for(String lector : lectoren){
        out.print("<li>");
        out.print(lector);
        out.print("</li>");
    }
    out.print("</ul></br>");
}
%>
<a href=<%= request.getRequestURI() %>>Reset </a>
</body>
</html>
