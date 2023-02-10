const f = document.getElementById("data");
function printDocument() {
    const backup = document.body.innerHTML;
    document.body.innerHTML = `<main>${document.querySelector("main").innerHTML}</main>`;
    window.print();
}
function r3e(){
    const rate3msg = document.getElementById("rate3msg");
    const rate3 = document.getElementById('rate3');
    
    if(rate3.value<35){
        rate3msg.innerHTML=`rate for 3 Layer can not be less than 35`;
        rate3msg.classList.remove("success");
        rate3msg.classList.add('fail');
        return false;
    }else{
        rate3msg.innerHTML=""
        rate3msg.classList.remove('fail');
        rate3.classList.add('success');
        return true;
    } 
}
function r4e(){
    const rate4msg = document.getElementById("rate4msg");
    const rate4 = document.getElementById('rate4');
    
    if(rate4.value<45){
        rate4msg.innerHTML=`rate for 4 Layer can not be less than 45`;
        rate4msg.classList.remove("success");
        rate4msg.classList.add('fail');
        return false;
    }else{
        rate4msg.innerHTML=""
        rate4msg.classList.remove('fail');
        rate4.classList.add('success');
        return true;
    } 
}
function r5e(){
    const rate5msg = document.getElementById("rate5msg");
    const rate5 = document.getElementById('rate5');
    
    if(rate5.value<55){
        rate5msg.innerHTML=`rate for 5 Layer can not be less than 55`;
        rate5msg.classList.remove("success");
        rate5msg.classList.add('fail');
        return false;
    }else{
        rate5msg.innerHTML=""
        rate5msg.classList.remove('fail');
        rate5.classList.add('success');
        return true;
    } 
}
function r8e(){
    const rate8msg = document.getElementById("rate8msg");
    const rate8 = document.getElementById('rate8');
    
    if(rate8.value<70){
        rate8msg.innerHTML=`rate for 8 Layer can not be less than 70`;
        rate8msg.classList.remove("success");
        rate8msg.classList.add('fail');
        return false;
    }else{
        rate8msg.innerHTML=""
        rate8msg.classList.remove('fail');
        rate8.classList.add('success');
        return true;
    } 
}

function Validate() {
  

    if (!r3e()||!r4e()||!r5e()||!r8e()) {
        return false;
    }
    else {
        return true;
    }
}
f.addEventListener('submit', (e) => {
    e.preventDefault();
    const ab = document.getElementById("browser").value;
    const name = document.getElementById('name').value;
    const add = document.getElementById("address").value;
    const feet = document.getElementById("feet").value;
    const rate3 = document.getElementById('rate3').value;
    const rate4 = document.getElementById('rate4').value;
    const rate8 = document.getElementById('rate8').value;
    const rate5 = document.getElementById('rate5').value;
    document.title = ab + '' + name + ' Giant Waterproofing Quotation';
    if (Validate()) {
        const date = new Date();
        const print = document.createElement('button');
        print.classList.add('button');
        print.textContent = 'print';
        const btnsection = document.querySelector('.btn');
        btnsection.innerHTML = "";
        btnsection.appendChild(print);
        print.addEventListener('click', printDocument);
        document.querySelector("main").innerHTML = `
    <div class="logo"><img src="logo.svg" alt=""></div>
<h2 class="company-name">
Giant Waterproofing Company
</h2>
<div class="reg-date">
    <div class="reg-num">GWC/R/32446/2023</div>
    <div class="date"><span class="dd">${(date.getDate() < 10) ? '0' + date.getDate() : date.getDate()}</span>.<span class="mm">${((date.getMonth() + 1) < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}</span>.<span class="yyyy">${date.getFullYear()}</span></div>
</div>
<div class="name-add">
    <h3 class="name">${ab + ' ' + name}</h2>
    <h3 class="address">${add}</h2>
</div>
<h4 class="title">Re: Waterproofing on Roof</h2>
<h4 class="salutation">Dear Sir,</h2>
<p class="msg">
<p style="margin-top:20px;">
    We thank you very much for your kind inquiry about waterproofing on the Roof area. <strong>Giant</strong> is a leading waterproofing expert assuring the right waterproofing solutions for <strong>leak-free homes </strong>
    with the best waterproofing <strong>services in India</strong>.
</p>



&nbsp;
<center><h3>Waterproofing Services with Rate</h3></center>

<table id="tb" border="1">
  <tr>
    <th>Description</th>
    <th>Sqft × Rate</th>
    <th>Amount </th>
  </tr>
  
  <tr >
    <td><h2>3 Layer Working</h2>
  <b>	(5 Year Warranty)<b>	</td>
    <td><b><span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate3} </span></b></td>
    <td><b><span class="total"><h2>&#x20B9;${feet * rate3 * 118 / 100}</span></h2></b>
(18 % GST Including)</td>
  </tr>
  <tr>
    <td><h2>4 Layer Working</h2>
    <b>(8 Year Warranty) <b></td>
    <td><b><span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate4} </span></b></td>
    <td><b><span class="total"><h2>&#x20B9;${feet * rate4 * 118 / 100}</span></h2></b>
(18 % GST Including)</td>
  </tr>
  <tr>
    <td><h2>5 Layer Working</h2>
    <b>(10 Year Warranty)<b></td>
    <td><b><span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate5} </span></b></td>
    <td><b><span class="total"><h2>&#x20B9;${feet * rate5 * 118 / 100}</span></h2></b>
(18 % GST Including)</td>
  </tr>
  <tr >
    <td><h2>8 Layer Working</h2>
    <b>(12 Year Warranty)<b></td>
    <td><b><span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate8} </span><b></td>
    <td><b><span class="total"><h2>&#x20B9;${feet * rate8 * 118 / 100}</span></h2><b>
(18 % GST Including)</td>
  </tr>
  
</table>








<p style="margin-top:20px;">
    <strong> Giant’s Layer Waterproofing treatment </strong>is a Waterproofing technique designed and
    developed for a
    complete <strong>waterproofing solution with a leakage-free warranty for years.</strong> This system
    can be applied for
    Waterproofing on RCC surfaces, Side Walls, Asbestos sheets, Tin Sheets, Water Tanks, etc
</p>
<h3 style="margin-top:20px; text-decoration: underline;
">Description of Chemicals:</h3>
<dl class="chem-des">
    <ol>
        <li>
            <dt>
                RainSiler :
            </dt>
            <dd>
                 <strong>RainSiller is a reactive organosilane-based waterproofing agent that seals up to the nano-pore level.</strong> It can penetrate up to 2 mm deep inside the substrate and becomes a permanent integral part of the structure. It reacts and converts the hydrophilic chemical groups of the substrate into hydrophobic groups. RainSiller is water dilutable, safe, sprayable, and easy to apply. RainSiller is non-leachable, UV resistant, breathable, and does not present peel-off issues, unlike conventional polymer coatings.
        </li>
        <li>
            <dt>
                RainPrime :
            </dt>
            <dd><strong>RainPrime is an acrylic co-polymer emulsion supplied as a ready-to-use bonding agent</strong> with superior wet adhesion and universal compatibility. It is also a versatile latex that can be used as a cement modifier for spalled concrete slabs, overhangs, beams, columns, and floors. It is also used as a bonding primer and porosity filler with RainSiller during waterproofing applications.</dd>
        </li>

        <li>
            <dt>
                SafeCoat:
            </dt>
            <dd>
                <strong>Giant Elastomeric is a high-performance elastomeric membrane for crack bridging.</strong> 
                It features curing through crosslinking and is highly UV durable. 
                It features the ability to elongate up to 250 percent. 
                It can be used on a variety of substrates as a mortar mix with sand and cement.
            </dd>
        </li>
    </ol>
</dl>
</p>
</p>
<h2 class="procedure">Waterproofing with Procedure (3 layer)</h2>
<p class="description">
<ol style="margin-left: 50px; line-height:1.8rem; font-weight:600; font-style:italic;">
    <li>Clean the surface by rubbing with a wire brush & other mechanical tools to remove dust and other
        loose materials. Repairing of Cracks work will be carried out as per requirement on the Basement by
        RainPrime with cement.</li>
    <li>Apply 1st Coating Giant RainPrime.</li>
    <li>Apply 2nd & 3rd coating of Giant SafeCoat with dilution.</li>
    
</ol>
</p>
<h2 class="area-detail-heading">Area Details Provided By Candidate</h2>
<p class="area-details">
    Working area <strong class="area"> ${feet} </strong>Sq fit. (approx.) of treated place should be calculated as per actual or as per site in charge direction.
</p>
<h2 class="Rate-heading">Rate:</h2>
<p class="Rate-details">
    Rs <strong class="rate">${rate3}</strong> per sq fit.(Rates are inclusive Chemicals, mechanical tools, Labor, & Supervision etc)
</p>
<h2 class="total-amount" style="border: 1px solid blue; display:inline-block; padding: 10px;">Total Amount: <span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate3} </span>=<span class="total">&#x20B9;${feet * rate3 * 118 / 100} Cost of 3 layer waterproofing</span></h2>


<h3 style="color: red; margin: 50px 0; ">Note:</h3>
<p style="border:1px solid red; padding:15px;">Cement must be provided by customer as per requirement</p>
<p style="border:1px solid red; padding:15px;">All details provided by the candidate via telecommunication are considered in this document. If any changes are found while measuring the area on site, then that area will be considered in the contract, and the amount will change accordingly.</p>
<h3 style="margin-top: 40px; text-align:center;">Product for Terrace Waterproofing
    Area <span class="total">${feet}</span>.ft (Approx.)
</h3>
<table border="1">
    <thead>
        <tr>
            <td>S.No</td>
            <td><strong>Product</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td><strong>RainPrime</strong></td>
        </tr>
        <tr>
            <td>2</td>
            <td><strong>SafeCoat</strong></td>
        </tr>
        <tr>
            <td>3</td>
            <td><strong>Cement</strong></td>
        </tr>
    </tbody>
</table>
<div class="t-and-d">


</li>
            </ol>
            <h4 style="border:1px solid blue; padding: 20px; margin-top:20px;">Warranty: 5 Years (Five Years) (for 3 Layer Waterproofing Service ) <b>T&C Apply</b>
                </h4>






<h2 class="procedure">Waterproofing with Procedure (4 layer)</h2>
<p class="description">
<ol style="margin-left: 50px; line-height:1.8rem; font-weight:600; font-style:italic;">
    <li>Clean the surface by rubbing with a wire brush & other mechanical tools to remove dust and other
        loose materials. Repairing of Cracks work will be carried out as per requirement on the Basement by
        RainPrime with cement.</li>
    <li>Apply 1st & 2nd coating of Giant RainPrime with Cement..</li>
    <li>Apply 3rd coats of Giant SafeCoat with dilution.</li>
    <li>Apply 4th coat of Giant SafeCoat without dilution.</li>
</ol>
</p>
<h2 class="area-detail-heading">Area Details Provided By Candidate</h2>
<p class="area-details">
    Working area <strong class="area"> ${feet} </strong>Sq fit. (approx.) of treated place should be calculated as per actual or as per site in charge direction.
</p>
<h2 class="Rate-heading">Rate:</h2>
<p class="Rate-details">
    Rs <strong class="rate">${rate4}</strong> per sq fit.(Rates are inclusive Chemicals, mechanical tools, Labor, & Supervision etc)
</p>
<h2 class="total-amount" style="border: 1px solid blue; display:inline-block; padding: 10px;">Total Amount: <span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate4} </span>=<span class="total">&#x20B9;${feet * rate4 * 118 / 100} Cost of 4 layer waterproofing</span></h2>


<h3 style="color: red; margin: 50px 0; ">Note:</h3>
<p style="border:1px solid red; padding:15px;">Cement must be provided by customer as per requirement</p>
<p style="border:1px solid red; padding:15px;">All details provided by the candidate via telecommunication are considered in this document. If any changes are found while measuring the area on site, then that area will be considered in the contract and the amount will be changed accordingly.</p>
<h3 style="margin-top: 40px; text-align:center;">Product for Terrace Waterproofing
    Area <span class="total">${feet}</span>.ft (Approx.)
</h3>
<table border="1">
    <thead>
        <tr>
            <td>S.No</td>
            <td><strong>Product</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td><strong>RainPrime</strong></td>
        </tr>
        <tr>
            <td>2</td>
            <td><strong>SafeCoat</strong></td>
        </tr>
        <tr>
            <td>3</td>
            <td><strong>Cement</strong></td>
        </tr>
    </tbody>
</table>





</li>
            </ol>
            <h4 style="border:1px solid blue; padding: 20px; margin-top:20px;">Warranty: 8 Years (Eight Years) (for 4 Layer Waterproofing Service ) <b>T&C Apply</b>
                </h4>  







<h2 class="procedure">Waterproofing with Procedure (5 layer)</h2>
<p class="description">
<ol style="margin-left: 50px; line-height:1.8rem; font-weight:600; font-style:italic;">
    <li>Clean the surface by rubbing with a wire brush & other mechanical tools to remove dust and other
        loose materials. Repairing of Cracks work will be carried out as per requirement on the Basement by
        RainPrime with cement.</li>
    <li>Apply 1st Coat Giant RainPrime.</li>
    <li>Apply 2nd coating of Giant Fibermesh.</li>
    <li>Apply 3rd & 4th coating of Giant RainPrime with cement dilution (Highly waterproofing & crack
        resistant coating).</li>
    <li>Apply the 5th coating of SafeCoat with cement without dilution. Highly waterproofing &
        crack-resistant coating).</li>
</ol>
</p>
<h2 class="area-detail-heading">Area Details Provided By Candidate</h2>
<p class="area-details">
    Working area <strong class="area"> ${feet} </strong>Sq fit. (approx.) of treated place should be calculated as per actual or as per site in charge direction.
</p>
<h2 class="Rate-heading">Rate:</h2>
<p class="Rate-details">
    Rs <strong class="rate">${rate5}</strong> per sq fit.(Rates are inclusive Chemicals, mechanical tools, Labor, & Supervision etc)
</p>
<h2 class="total-amount" style="border: 1px solid blue; display:inline-block; padding: 10px;">Total Amount: <span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate5} </span>=<span class="total">&#x20B9;${feet * rate5 * 118 / 100} Cost of 5 layer waterproofing</span></h2>

<h3 style="color: red; margin: 50px 0; ">Note:</h3>
<p style="border:1px solid red; padding:15px;">Cement must be provided by customer as per requirement</p>
<p style="border:1px solid red; padding:15px;">All details provided by the candidate via telecommunication are considered in this document. If any changes are found while measuring the area on site, then that area will be considered in the contract and the amount will be changed accordingly.</p>
<h3 style="margin-top: 40px; text-align:center;">Product for Terrace Waterproofing
    Area <span class="total">${feet}</span>.ft (Approx.)
</h3>
<table border="1">
    <thead>
        <tr>
            <td>S.No</td>
            <td><strong>Product</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td><strong>RainPrime</strong></td>
        </tr>
        <tr>
            <td>2</td>
            <td><strong>SafeCoat</strong></td>
        </tr>
        <tr>
            <td>3</td>
            <td><strong>Fibermesh</strong></td>
        </tr>
        <tr>
            <td>4</td>
            <td><strong>Cement</strong></td>
        </tr>
    </tbody>
</table>
<div class="t-and-d">


                
</li>
            </ol>
            <h4 style="border:1px solid blue; padding: 20px; margin-top:20px;">Warranty: 10 Years (Ten Years) (for 5 Layer Waterproofing Service ) <b>T&C Apply</b>
                </h4> 







<h2 class="procedure">Waterproofing with Procedure (8 layer)</h2>
<p class="description">
<ol style="margin-left: 50px; line-height:1.8rem; font-weight:600; font-style:italic;">
    <li>Clean the surface by rubbing with a wire brush & other mechanical tools to remove dust and other
        loose materials. Repairing of Cracks work will be carried out as per requirement on Roof.</li>
    <li>Apply 1st Coating Giant RainPrime and RainSiller(spray). </li>
    <li>Apply 2nd coating of Giant Fibermesh.</li>
    <li>Apply 3rd & 4th & 5th coating of Giant RainPrime with cement dilution </li>
    <li>Apply 6th & 7th coats of SafeCoat with cement with dilution.</li>
    <li>Apply  8th coats of SafeCoat with cement without dilution Coating).</li>
</ol>
</p>
<h2 class="area-detail-heading">Area Details Provided By Candidate</h2>
<p class="area-details">
    Working area <strong class="area"> ${feet} </strong>Sq fit. (approx.) of treated place should be calculated as per actual or as per site in charge direction.
</p>
<h2 class="Rate-heading">Rate:</h2>
<p class="Rate-details">
    Rs <strong class="rate">${rate8}</strong> per sq fit.(Rates are inclusive Chemicals, mechanical tools, Labor, & Supervision etc)
</p>
<h2 class="total-amount" style="border: 1px solid blue; display:inline-block; padding: 10px;">Total Amount: <span class="sqfit"> ${feet} </span>&times;<span class="rate"> ${rate8} </span>=<span class="total">&#x20B9;${feet * rate8 * 118 / 100} Cost of 8 layer waterproofing</span></h2>

<h3 style="color: red; margin: 50px 0; ">Note:</h3>
<p style="border:1px solid red; padding:15px;">Cement must be provided by customer as per requirement</p>
<p style="border:1px solid red; padding:15px;">All details provided by the candidate via telecommunication are considered in this document. If any changes are found while measuring the area on site, then that area will be considered in the contract and the amount will be changed accordingly.</p>
<h3 style="margin-top: 40px; text-align:center;">Product for Terrace Waterproofing
    Area <span class="total">${feet}</span>.ft (Approx.)
</h3>
<table border="1">
    <thead>
        <tr>
            <td>S.No</td>
            <td><strong>Product</strong></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td><strong>RainSiller</strong></td>
        </tr>
        <tr>
            <td>2</td>
            <td><strong>RainPrime</strong></td>
        </tr>
        <tr>
            <td>3</td>
            <td><strong>SafeCoat</strong></td>
        </tr>
        <tr>
            <td>4</td>
            <td><strong>Fibermesh</strong></td>
        </tr>
        <tr>
            <td>5</td>
            <td><strong>Cement</strong></td>
        </tr>
    </tbody>
</table>
<div class="t-and-d">



                
</li>
            </ol>
            <h4 style="border:1px solid blue; padding: 20px; margin-top:20px;">Warranty: 12 Years (Twelve Years) (for 8 Layer Waterproofing Service  ) <b>T&C Apply</b>
                </h4>









    <h2>Terms and Conditions</h2>
    <p>
        <dl>
            <ol>
                <li>
                    <dt>Taxes:</dt>
                    <dd><strong>GST Tax 18 %  Including.</strong></dd>
                </li>
                <li>
                    <dt>Payment Terms:</dt>
                    <dd>Work to commence against firm work order along with <strong>90 % Advance</strong>  along with work order. A balance payment of 10% is to be made immediately upon completion of work.</dd>
                </li>
                <li>
                    <dt>Transport Fee Extra</dt>
                    <dd></dd>
                </li>
                <li>
                    <dt>Validity:</dt>
                    <dd>Our quotation is valid for 12 days from this date and the validity thereof is subject to our final confirmation.</dd>
                </li>
                <li>
                    <dt>General:</dt>
                    <dd>We need your co-operation to provide us safe space for storing our materials, during the work.</dd>
                </li>
                <li>
                    <dt>Kindly note that the actual measurement will be in line with the Industrial standards.</dt>
                    <dd>The above work shall be completed as per the schedule mutually discussed and agreed upon, to avoid inconvenience place the order well in advance.</dd>
                </li>
                <li>
                    <dt>Completion:</dt>
                    <dd>
                        The above work shall be completed as per the schedule mutually discussed and agreed upon, to avoid inconvenience place the order well in advance.
                        <ol>
                            <li>
                                The work order and advance must be allowed 15 working days before the date of commencement of work. To arrange the materials and utilities.
                            </li>

                            <li>
                                Kindly ensure the work area is available on time so that our workmen’s idle and other inconveniences in service can be avoided.
                            </li>
                        </ol>
                    </dd>
                </li>
                <li>
                    <dt>Water and Electricity:</dt>
                    <dd>Necessary construction water and power required for the execution of our work should be provided free of cost by you.</dd>
                
            
        </dl>
    </p>
    <div class="company-details">
        <h2>Bank Account Details[HDFC Bank]</h2>
        <h3>Name: Giant WaterProofing Co.</h3>
        <h3>A/C No: 50200069668033</h3>
        <h3>IFSC Code: HDFC0005386</h3>
    </div>
    <div class="qr-code">
        <img src="qr.jpg" alt="">
    </div>
    <div class="contact">

    </div>
    <div class="footer">



   <h3>Contact US</h3>
        <p class="contact-details">
            <p style="text-align:left;">Name: <span class="name"><b>Giant Sales Team</b></span></p>
            <p style="text-align:left;">Mobile: <span class="mobile"><b>+917470612116</b></span></p>
            <p style="text-align:left;">Email: <span class="email"><b>info@giantwaterproofing.in</b></span></p>
            <p style="text-align:left;">Web: <span class="website"><b>giantwaterproofing.in</b></span></p>

       
    </div></div>
    `;
    }
    else{
        r3e();
        r4e();
        r5e();
        r8e();
    }


});
