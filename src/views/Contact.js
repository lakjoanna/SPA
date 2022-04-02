export function Contact() {
    const section = document.createElement('section');
   
    section.innerHTML = `
        <div class="container">
            <h1 class="contact_us-h1">Kontakt</h1>
            <div class="contact_box">
                <div class="contact_left">
                  
                    <form>
                        <div class="input-row">
                            <div class="input_group">
                                <label>Imię</label>
                                <input class="input_contact" type="text">
                            </div>
                            <div class="input-group">
                                <label>Nazwisko</label>
                                <input class="input_contact" type="text">
                            </div>
                        </div>
                        <div class="input_row">
                            <div class="input_group">
                                <label>Telefon:</label>
                                <input class="input_contact" type="text">
                            </div>
                            <div class="input_group">
                                <label>Email:</label>
                                <input class="input_contact" type="text">
                            </div>                     
                        </div>
                        <label>Message</label>
                        <textarea rows="5"></textarea>
                        <button class="btn btn-light btn-sm btn-lg btn-radius" type="submit">Wyślij</button>
                    </form>
                </div>
                <div class="contact_right">
                    <h3>Dane firmy</h3>
                    <table>
                        <tr>
                           <td>Nazwa</td>
                           <td>IT SPA</td>
                      </tr>
                       <tr>
                           <td>Email</td>
                           <td>cyberspa@cyberspa.com</td>
                      </tr>
                       <tr>
                           <td>Telefon:</td>
                           <td>+48 123 456 778</td>
                      </tr>
                       <tr>
                           <td>Adres:</td>
                           <td>ul. Wrocławska 8 <br>
                           70-777 Poznań</td>
                     </tr>
                    </table>
                 </div>
            </div>
        </div>    
        `;

return section;
}