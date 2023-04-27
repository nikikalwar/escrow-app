
export const Footer=()=>{
    return (
        <>
        <div>
 <div className="row" style={{"paddingLeft":"150px","paddingRight":"20px","paddingTop":"50px"}}>

<div className="col">
<img  src="./logo192.png" width = {200} height={50}></img>
  <p>Escrow Pay Limited is a secure online payment processing escrow service for buyers and sellers.</p>
</div>
<div className="col">
  <h6>About Company</h6>
  <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/faq">FAQ</a></li>
  </ul>
</div>
<div className="col">
<h6>Useful Links</h6>
  <ul>
      <li><a href="/home">Contact</a></li>
      <li><a href="/about">Privacy</a></li>
      <li><a href="/blog">Terms and Conditions</a></li>
      
  </ul>
</div>
<div className="col">
<h6>Subscribe Newsletter</h6>
 <p>By subscribing to our mailing list you will always be updated  </p>
</div>

</div>
        </div>
        </>
    )
}