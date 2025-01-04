let Employee=()=>{
    let employees=[{"id":1,"name":"tferriday0@nydailynews.com","gender":"Male"},
        {"id":2,"name":"cgiannasi1@forbes.com","gender":"Female"},
        {"id":3,"name":"gclewes2@nature.com","gender":"Male"},
        {"id":4,"name":"ltingly3@sphinn.com","gender":"Male"},
        {"id":5,"name":"drobey4@nydailynews.com","gender":"Male"},
        {"id":6,"name":"hweston5@narod.ru","gender":"Male"},
        {"id":7,"name":"atreker6@upenn.edu","gender":"Male"},
        {"id":8,"name":"norsman7@zimbio.com","gender":"Female"},
        {"id":9,"name":"aphilo8@dailymotion.com","gender":"Female"},
        {"id":10,"name":"sblance9@odnoklassniki.ru","gender":"Female"},
        {"id":11,"name":"mgeria@usgs.gov","gender":"Male"},
        {"id":12,"name":"ljoburnb@google.com.hk","gender":"Female"},
        {"id":13,"name":"kgeckc@webs.com","gender":"Female"},
        {"id":14,"name":"thealdd@google.pl","gender":"Female"},
        {"id":15,"name":"chemphille@mayoclinic.com","gender":"Female"},
        {"id":16,"name":"ldunridgef@live.com","gender":"Male"},
        {"id":17,"name":"rsloeyg@skype.com","gender":"Female"},
        {"id":18,"name":"pdrih@gizmodo.com","gender":"Male"},
        {"id":19,"name":"lrufi@list-manage.com","gender":"Male"},
        {"id":20,"name":"mgoadsbyj@gnu.org","gender":"Male"},
        {"id":21,"name":"mgimsonk@salon.com","gender":"Female"},
        {"id":22,"name":"igimenol@xing.com","gender":"Male"},
        {"id":23,"name":"cwagstaffem@dailymail.co.uk","gender":"Male"},
        {"id":24,"name":"gmacvaghn@ox.ac.uk","gender":"Male"},
        {"id":25,"name":"jbergero@cpanel.net","gender":"Male"},
        {"id":26,"name":"rladburyp@howstuffworks.com","gender":"Male"},
        {"id":27,"name":"mclearq@squidoo.com","gender":"Agender"},
        {"id":28,"name":"dgabbotr@jalbum.net","gender":"Female"},
        {"id":29,"name":"cjozsas@home.pl","gender":"Female"},
        {"id":30,"name":"rwillsheet@disqus.com","gender":"Female"},
        {"id":31,"name":"lbiggadikeu@phoca.cz","gender":"Male"},
        {"id":32,"name":"ncozziv@nifty.com","gender":"Female"},
        {"id":33,"name":"etwiddlew@desdev.cn","gender":"Genderqueer"},
        {"id":34,"name":"bdemougeotx@google.de","gender":"Male"},
        {"id":35,"name":"fdanihelkay@github.io","gender":"Male"},
        {"id":36,"name":"ncromlyz@blogtalkradio.com","gender":"Female"},
        {"id":37,"name":"umckerrow10@thetimes.co.uk","gender":"Male"},
        {"id":38,"name":"bleak11@histats.com","gender":"Male"},
        {"id":39,"name":"iklagges12@techcrunch.com","gender":"Female"},
        {"id":40,"name":"gkellie13@freewebs.com","gender":"Male"},
        {"id":41,"name":"ncarruthers14@github.io","gender":"Male"},
        {"id":42,"name":"sshepland15@jalbum.net","gender":"Male"},
        {"id":43,"name":"hbrittles16@mit.edu","gender":"Female"},
        {"id":44,"name":"abinnes17@alibaba.com","gender":"Female"},
        {"id":45,"name":"clarkworthy18@liveinternet.ru","gender":"Male"},
        {"id":46,"name":"aduffil19@eventbrite.com","gender":"Male"},
        {"id":47,"name":"twhenman1a@miibeian.gov.cn","gender":"Female"},
        {"id":48,"name":"wmalone1b@jimdo.com","gender":"Female"},
        {"id":49,"name":"tdrinkhall1c@reuters.com","gender":"Male"},
        {"id":50,"name":"afullwood1d@comcast.net","gender":"Female"}]
    return <div>
        <h3>Employee Data</h3>
        <table border={4}>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>

            </thead>
            <tbody>
                {
                    employees.map((emp)=>{
                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.gender}</td>
                        </tr>


                    })

                }
                

            </tbody>
        </table>
    </div>

}
export default Employee