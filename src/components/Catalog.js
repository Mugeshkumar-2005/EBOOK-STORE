
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookshopImage from '../assets/Bookshop.gif';
import { FaShoppingCart } from 'react-icons/fa';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart,setCart]=useState([]);
  const navigate = useNavigate();

  const ebooks = [
    { 
      id: 1,
      title: 'Three Men in a Boat',
      price: 99 ,
      author: 'Jerome K. Jerome',
      description:'Three Men in a Boat was first published in 1889. It is the fictional story of three London friends and a dog taking a leisurely boat trip up the River Thames, from Kingston-upon-Thames to Oxford. It is narrated by ‘J.’, whose companions are George (awarded no surname), William Samuel Harris and the dog, Montmorency. During a sociable evening in J.’s room, the three men convince themselves that they each have various illnesses. Their collective diagnosis is overwork, and they prescribe themselves a fortnight’s holiday. George must work in the City in the morning, and so arranges to join them later that day. The other two, accompanied by the dog and a mountain of luggage, get a cab to Waterloo station, but are unable to find the correct train to Kingston. Eventually they bribe the driver of another train to take them there instead, one of the many humorous set-pieces that make the book more than a straightforward travelogue. George completes the trio at Weybridge, with a dubious-looking parcel tucked under his arm, which turns out to be a banjo and instruction book. The story is a tapestry of incidents that occur, anecdotes on various topics (including the unreliability of weather forecasts), loosely connected digressions (such as J.s uncle’s inability to hang pictures), and descriptive pieces on the places that they pass. It is in these descriptive pieces that the author’s original intention of writing a guidebook is most apparent. What he actually achieved was a classic of British humorous writing. Although the book was written over a century ago, it has an enduring, timeless quality.',
      image: 'https://m.media-amazon.com/images/I/71FUaywnETL._SY466_.jpg' ,
      pdfFile: "/ebooks/three-men-in-a-boat.pdf"},
    { id: 2,
      title: 'Othello',
      price:70,
      author: 'William Shakespeare ',
      description:'Othello takes place in 16th-century Venice and also Cyprus. Othello who is a noble black warrior in the Venetian army that secretly married a beautiful white woman called Desdemona who is the daughter of a prominent senator named Brabantio. When he eventually finds out and is completely furious he decides to disown Desdemona.Iago has a secret jealousy and resentment towards Othello because a soldier named Lieutenant Cassio has been put in front of him and also suspects that Othello has been cheating with his wife. Waiting on revenge, Iago plans a devious comeback to plant suspicions in Othello’s mind that Desdemona has been having an affair with Cassio. He decided to start a street fight which Cassio is blamed for, and is then dismissed from his post by Othello. Desdemona takes up Cassio’s case with her husband, which only increases his suspicions that the pair are lovers.While all of this is happening Iago manages to find a treasured handkerchief from Desdemona that was given to her by Othello. He somehow gets the handkerchief on Cassio so that Othello sees it and he finally concludes that the possession is proof of the affair. Due to the jealousy, he orders Iago to murder Cassio. Then Othello decides to strangle Desdemona. Immediately afterwards her innocence is revealed, and Iago’s treachery exposed. In a fit of grief and remorse Othello kills himself and Iago is taken into custody by the authorities.', 
      image: 'https://th.bing.com/th/id/OIP.AINdqgn2RXDJ2hpt7RiTFQAAAA?rs=1&pid=ImgDetMain' ,
      pdfFile: "/ebooks/Othello.pdf"},
    { id: 3, 
      title: 'Nationalism', 
      price:69, 
      author:'Rabindranath Tagore',
      description:'“And yet I will persist in believing-that there is such a thing as the harmony of completeness in humanity..”A compendium of lectures delivered by Tagore during the First World War and the Swadeshi movement in India, Nationalism emphasises Tagore’s political and philosophical views on human understanding and its weakness for power and material hoardings. Packed with erudition and analysis, it expounds the idea of a moral and spiritual growth for human welfare. the lectures—written in a lucid, metaphoric, poetic prose—are loaded with a piercing vision of the future and are a critique on his views on spirituality and humanity.Tagore was a farsighted visionary, whose forebodings on the lack of human values and the political role of the nation and the state in the East and the West are well articulated in these lectures. Tagore discusses the revival of the East and the challenge it poses to the Western reign, calling for a future based on tolerance, a future where tradition and modernity are balanced.Tagore’s Nationalism holds much relevance in today’s environment of violence and intolerance.',
      image: 'https://m.media-amazon.com/images/I/81l6fqnvL3L._AC_UY545_QL65_.jpg',
      pdfFile:"/ebooks/Nationalism.pdf" },
    { id: 4, 
      title: 'As a Man Thinketh', 
      price:59, 
      author:'James Allen ',
      description:'In As a Man Thinketh, James Allen points out the power of thoughts in shaping our realities. Often, we think that we are the victims of circumstance while in truth our thoughts, actions, and habits create the circumstances we dislike. The solution is to cultivate better thoughts just like we would treat a garden. Everyone should read it Can you think of a single moment in the whole day when your mind is blank and thoughtless?Do you know how powerful every thought is?“Cherish your visions; cherish your ideals; cherish the music that stirs in your heart, the beauty that forms in your mind, the loveliness that drapes your purest thoughts, for out of them will grow all delightful conditions, all heavenly environment; of these, if you but remain true to them, your world will at last be built.”Giving an insight into the power of thoughts; the effect they have on our health, body and circumstances; and how we become what we think; this compelling literary essay by James Allen contains practical wisdom which will inspire, enlighten and help us discover our hidden powers.Written in a spiritual tone, As a Man Thinketh has been a valuable source of inspiration ever since its first publication in 1903. It continues to remain a classic bestseller.',
      image: 'https://th.bing.com/th/id/OIP.bknLbP0C3LU95Ml5hHXFzwHaLc?rs=1&pid=ImgDetMain' ,
      pdfFile:"/ebooks/James Allen As A Man Thinketh  2007.pdf"},
    { id: 5, 
      title: 'The Jungle Book', 
      price:99, 
      author:'Rudyard Kipling',
      description:'In The Jungle Book, a young boy named Mowgli becomes a member of the Seeonee Wolf Pack. A cruel tiger named Shere Khan plots against Mowgli and the leader of his pack, Akela. When Mowgli grows up, he realizes that he must rejoin the ranks of men. Mowgli strays from his village one day. After being attacked by Shere Khan, hes saved by Father Wolf, who asks Akela, the leader of the wolves, to accept Mowgli as a member of the pack. Mowgli briefly returns to the world of men, but leaves after he learns that Shere Khan has been plotting against Akela. He defeats the tiger, but knows that someday he will rejoin the man-pack. A python named Kaa takes Mowgli down to the Cold Lairs, where he steals an ankus. He discards the ankus, fearing its deadly curse. This results in the death of six men. After this incident, Mowgli becomes unhappy and gradually drifts toward the world of men.',
      image: 'https://th.bing.com/th/id/OIP.ZVoH1eSekGJMkY5ltPQp8gAAAA?rs=1&pid=ImgDetMain',
      pdfFile:"/ebooks/The Jungle Book_Rudyard Kipling.pdf" },
    { id: 6, 
      title: 'The Story of My Life',
      price:149, 
      author:'Helen Keller',
      description:'The Story of My Life Summary: The Story of my life is the story of Helen Keller who triumphed over adversity and became world famous. She was born on June 27, 1880 in Tuscumbia, Alabama. Her parents were Captain Arthur Henry Keller, a confederate army veteran and a newspaper editor and Kate Adams Keller. She was born as a normal child. But at the age of 19 months, she suffered an illness that left her deaf and blind. Her family wondered how a deaf and blind child could be educated. At the age of six, her mother managed to get a teacher, Anne Sullivan, to teach Helen. After studying at the Wright Humason School for the Deaf and the Cambridge School for Young ladies, she entered Radcliff College in 1900 and finished her graduation in 1904. The Story of My Life is a true example that Helen’s life is neither a miracle nor a joke. With the help of her teacher, Anne Sullivan, Helen became an inter-nationally recognized and respected figure. In 1908 Helen published “The World I Live In”, an account of how she experienced the world through touch, taste and scent.',
      image: 'https://th.bing.com/th/id/OIP.sJSqjsy8K-mOq_Ef6fMJUgHaLb?rs=1&pid=ImgDetMain' ,
    pdfFile:"/ebooks/story-of-my-life.pdf"},
    { id: 7, 
      title: 'The Sherlock Holmes',
      price:136, 
      author:'Arthur Conan Doyle ',
      description:'The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, first published on 14 October 1892. It contains the earliest short stories featuring the consulting detective Sherlock Holmes, which had been published in twelve monthly issues of The Strand Magazine from July 1891 to June 1892. The stories are collected in the same sequence, which is not supported by any fictional chronology. The only characters common to all twelve are Holmes and Dr. Watson and all are related in first-person narrative from Watsons point of view. In general the stories in The Adventures of Sherlock Holmes identify, and try to correct, social injustices. Holmes is portrayed as offering a new, fairer sense of justice. The stories were well received, and boosted the subscriptions figures of The Strand Magazine, prompting Doyle to be able to demand more money for his next set of stories. The first story, "A Scandal in Bohemia", includes the character of Irene Adler, who, despite being featured only within this one story by Doyle, is a prominent character in modern Sherlock Holmes adaptations, generally as a love interest for Holmes. Doyle included four of the twelve stories from this collection in his twelve favourite Sherlock Holmes stories, picking "The Adventure of the Speckled Band" as his overall favourite.',
      image: 'https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780439574280/primary/renditions/700?useMissingImage=true' ,
      pdfFile:"/ebooks/sherlock.pdf"},
    { id: 8, 
      title: 'Relativity', 
      price:129, 
      author:'Albert Einstein',
      description:'It is known as special relativity because it applies only to special cases: frames of reference in constant, unchanging motion. In 1915, Einstein published the general theory of relativity, which applies to frames that are accelerating with regard to each other. Time does not pass at the same rate for everyone. ‘When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That’s relativity.’Dealing with the theory of relativity—special relativity and general relativity—and the considerations on the universe as a whole, this book gives an insight into the scientific theory about the relationship between space and time, the theory of gravitation and the universe.A Nobel laureate, Einstein’s research and theories changed the world. First published in 1916, Relativity: The Special and the General Theory is regarded as the most significant work in modern physics. It continues to remain popular and highly influential.',
      image: 'https://th.bing.com/th/id/OIP.KJy5wYdgFfiF0zWPmmPQMgAAAA?rs=1&pid=ImgDetMain',
    pdfFile:"/ebooks/Relativity.pdf" },
    { id: 9, 
      title: 'The Origin of Species',
      price:159, 
      author:'Charles Darwin ',
      description:'Darwin’s theory is based on the notion of variation. It argues that the numerous traits and adaptations that differentiate species from each other also explain how species evolved over time and gradually diverged. Variations in organisms are apparent both within domesticated species and within species throughout the natural world. Variations in colors, structures, organs, and physical traits differentiate a multitude of species from one another. Heredity is the mechanism that perpetuates variations, Darwin argues, as traits are passed from parents to offspring. What is important about these variations to Darwin, though, is the way they allow species to adapt and survive in the natural world. He gives numerous examples of variations that illustrate the wondrous adaptations that allow species to survive in their natural environments: the beak that allows the woodpecker to gather insects, the wings that allow the bat to fly, the paddles that allow the porpoise to swim, and so on. Darwin hypothesizes that the minor variations we see within a single species—such as variations in size, shape, and color of organisms—are related to the more distinct variations seen across different species. His theory of evolution explains how variations cause the origin of species.',
      image: 'https://th.bing.com/th/id/OIP.T14IPBR6Qcdj56CJPYMJXgHaK7?rs=1&pid=ImgDetMain',
    pdfFile:"/ebooks/the-origen-of-species.pdf" },
    { id: 10, 
      title: 'The Art of War', 
      price:39, 
      author:'Sun Tzu',
      description:'Sun Tzu was a Chinese general, military strategist and a philosopher whose books have universal resonance even in the contemporary time. The Art of War has inspired Mao Zedong’s writings about Guerrilla warfare. Ho Chi Minh translated The Art of War for his generals to study. Sun Tzus Art of War is a widely acclaimed book on military strategy that has influenced and shaped the idea of Western and Eastern nations military philosophy. It presents complete instructions on how to win battles and manage conflicts. The theories proposed in Art of War are extremely beneficial on the battle ground and has been tried and tested by many successful military generals around the world. It is difficult to ascertain exactly when was this book written and many historians have ascribed it to different times. The Art of War has established its significance not just as a valuable book for military strategies but it also gives lesson in diplomacy and public administration and planning. It stresses on the need for healthy and friendly relations with other nations. In the context of changing world politics and rising interest in foreign policy affairs. This book will be of special interest to people who want to read philosophy, the amazing quotes about life, winning battles and how to tide over daily struggles then its a must read for you.',
      image: 'https://images.thenile.io/r1000/9781626860605.jpg',
    pdfFile:"/ebooks/ArtOfWar.pdf" },
    { id: 11, 
      title: 'A Little Princess',
       price:139, 
       author:'Frances Hodgson Burnett',
       description:'A Little Princess is a childrens novel by Frances Hodgson Burnett, first published as a book in 1905. It is an expanded version of the short story "Sara Crewe: or, What Happened at Miss Minchins", which was serialized in St. Nicholas Magazine from December 1887, and published in book form in 1888. According to Burnett, after she composed the 1902 play A Little Un-fairy Princess based on that story, her publisher asked that she expand the story as a novel with "the things and people that had been left out before". Captain Ralph Crewe, a wealthy English widower, has been raising his only child, Sara, in India where he is stationed with the British Army. Because the Indian climate is considered too harsh for children, British families living there traditionally send their children to boarding school back home in England.',
       image: 'https://m.media-amazon.com/images/M/MV5BZDQzMGE5ODYtZDdiNC00MzZjLTg2NjAtZTk0ODlkYmY4MTQzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg' ,
      pdfFile:"/ebooks/a-little-princess.pdf"},
    { id: 12, 
      title: 'A Passage To India', 
      price:189, 
      author:' E. M. Forster',
      description:'“We may hate one another, but we hate you most... Yes, we shall drive every blasted Englishman into the sea.” on that fateful day, when Dr. Aziz took Mrs. Moore and Miss adela quest to the famous marabar caves, he had no idea that his whole life was about to turn upside down. All Aziz had done was kindly offer to show the ‘real’ India to the two englishwomen who had newly arrived in his country. But on the day of the excursion, upon returning from the caves, he was slapped with the accusation of a sexual assault. What happens when Aziz is brought to Court? Does the man get justice? Or has his race earmarked him for prison? Set in the fictional town of Chandernagore, in the pre-Independence era of India, a passage to India portrays colonialism, racial prejudice, and the dynamics of Anglo-Indian relations with striking realism. Considered forster’s most successful novel, it was adapted into a film in 1984, and was featured in time magazine list of hundred best English-language novels from 1923 to 2005.',
      image: 'https://img.moviesrankings.com/t/p/w1280/6C9i2VflXITVEq5liUlWgpSMMdo.jpg',
    pdfFile:"/ebooks/APassageToIndia.pdf" },
    { id: 13, 
      title: 'Ghosts of The Silent Hills', 
      price:159, 
      author:'Anita Krishan',
      description:'The dead do not rest till they get what they want. You have arrived in the hills. In here, you are surrounded by dense, menacing forests, enveloped in a deadly silence... You never know what lurks here in the Cold, dark night. Do not walk alone after sunset in the hills. A beautiful woman in white haunts the Lonely pathways, looking to enchant and ensnare men... All the people who died in accidents here... They say you hear their screams at night. And the deserted lodges sitting amidst lush greenery and calm streams... Spirits lie in wait here, ready to prey on the living. There are sceptics who did not heed these warnings. They tried to rationalize what they saw, what they felt. But when they came face to face with the beings that they believed didn’t exist, they couldn’t run away anymore... Ghosts of the silent hills is a collection that will make your nights a little scarier, encompassing the very best spine-chilling stories based on true hauntings.',
      image: 'https://www.indiacafe24.com/wp-content/uploads/2020/03/Ghosts-of-the-Silent-Hills-front-cover.jpg',
    pdfFile:"/ebooks/ghosts-of-the-silent-hills-stories-based-on-true-hauntings.pdf" },
    { id: 14, 
      title: 'Treasure Island',
      price:169, 
      author:'Robert Louis Stevenson',
      description:'Think of the high seas and of a buccaneer ship; of a wild seaman with a sea chest full of gold; of Long John Silver; of a buried treasure and of young Jim Hawkins, the boy with the treasure map the key to it all. This is the Treasure Island and if you dont think of all this, the pirates will hunt you down and when they find you, for find you they sure will, they will trust you and carry you back to their ship and just before they feed you to the sharks, as you walk the gangplank with a sword digging sharp and sure into your back, they will sing their one last song for you. “Fifteen men on the dead mans chest Yo-ho-ho and a bottle of rum!”',
      image: 'https://www.tvguide.com/a/img/catalog/provider/1/3/1-11349495424.jpg',
    pdfFile:"/ebooks/Treasure Island.pdf" },
    { id: 15, 
      title: 'Bleach Volume 1', 
      price:189, 
      author:'Tite Kubo ',
      description:'Ichigo Kurosaki has always been able to see ghosts, but this ability doesn’t change his life nearly as much as his close encounter with Rukia Kuchiki, a Soul Reaper and member of the mysterious Soul Society. While fighting a Hollow, an evil spirit that preys on humans who display psychic energy, Rukia attempts to lend Ichigo some of her powers so that he can save his family; but much to her surprise, Ichigo absorbs every last drop of her energy. Now a full-fledged Soul Reaper himself, Ichigo quickly learns that the world he inhabits is one full of dangerous spirits and, along with Rukia–who is slowly regaining her powers–it’s Ichigo’s job to protect the innocent from Hollows and help the spirits themselves find peace.',
      image: 'https://cdn.kobo.com/book-images/20ce5810-226e-419c-b0e2-686045d1e397/1200/1200/False/bleach-vol-1.jpg',
    pdfFile:"/ebooks/Bleach, Vol. 1 (Tite Kubo) (Z-Library).pdf" },
    { id: 16, 
      title: 'Chainsawman Vol 1', 
      price:199, 
      author:'Tatsuki Fujimoto',
      description:'Denji’s a poor young man who’ll do anything for money, even hunting down devils with his pet devil Pochita. He’s a simple man with simple dreams, drowning under a mountain of debt. But his sad life gets turned upside down one day when he’s betrayed by someone he trusts. Now with the power of a devil inside him, Denji’s become a whole new man—Chainsaw Man!',
      image: 'https://th.bing.com/th/id/OIP.3a7o5QfUFXX25zdo9pWJCQHaLo?rs=1&pid=ImgDetMain',
    pdfFile:"/ebooks/Chainsaw Man [Volume 01].pdf" },
    { id: 17, 
      title: 'Dragon Ball Vol 1', 
      price:299, 
      author:'Akira Toriyama ',
      description:'Before there was Dragon Ball Z, there was Akira Toriyama’s action epic Dragon Ball, starring the younger version of Son Goku and all the other Dragon Ball Z heroes! Meet a naive young monkey-tailed boy named Goku, whose quiet life changes when he meets Bulma, a girl who is on a quest to collect seven “Dragon Balls.” If she gathers them all, an incredibly powerful dragon will appear and grant her one wish. But the precious orbs are scattered all over the world, and Bulma needs Goku’s help (and his super-strength)! With a magic staff for a weapon and a flying cloud for a ride, Goku sets out on the adventure of a lifetime…',
      image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781569319208/dragon-ball-vol-1-9781569319208_hr.jpg',
    pdfFile:"/ebooks/Dragon Ball, Volume 1 (Akira Toriyama) (Z-Library).pdf" },
    { id: 18, 
      title: 'Naruto 3 In 1 Edition',
      price:249, 
      author:'Masashi Kishimoto ',
      description:'The world’s most popular ninja comic! Naruto is a young shinobi with an incorrigible knack for mischief. He’s got a wild sense of humor, but Naruto is completely serious about his mission to be the world’s greatest ninja! Twelve years ago the Village Hidden in the Leaves was attacked by a fearsome threat. A nine-tailed fox spirit claimed the lives of the village leader, the Hokage, and many others. Today, the village is at peace and a troublemaking kid named Naruto is struggling to graduate from Ninja Academy. His goal may be to become the next Hokage, but his true destiny will be much more complicated. The adventure begins now!',
      image: 'https://th.bing.com/th/id/OIP.OIHR7bJ6JsefXu7FYeF0IAHaLH?rs=1&pid=ImgDetMain' },

  ];
  const featuredBooks = [
    ebooks[4],  
    ebooks[8],  
    ebooks[9],  
    ebooks[10], 
    ebooks[1],
  ];
  
  const filteredEbooks = ebooks.filter((ebook) =>
    ebook.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleImageClick = (ebook) => {
    navigate('/reader', { state: { ebook } });
  };
  
  const handleAddToCart=(ebook)=>{
    setCart((prevCart)=>[...prevCart,ebook]);
  };
  const goToCheckout = () => {
    navigate('/checkout', { state: { cart } });
  };

  return (
    <div style={styles.catalog}>
      <div>
        <img src={BookshopImage} alt="Ebook Logo" style={styles.logoImage}/>
        <h2 style={styles.heading}>Discover Your Next<br/>Favorite Book Here.</h2>
        <p style={styles.par1}>Explore our curated collection of new and popular<br/>books to find your next literary adventure.</p>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for ebooks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}></button>
        </div>
      </div>
      {searchTerm === '' && (
        <div style={styles.container1}>
          <h3 style={styles.par2}>
            <span style={styles.best}>Best</span>
            <span style={styles.seller}> Sellers</span></h3>
          <div style={styles.grid2}>
            {featuredBooks.map((ebook,index) => (
              <div key={ebook.id} style={{
                ...styles.bookItem,
                ...(index >= filteredEbooks.length - 2 ? styles.centeredItem : {}),
              }}>
                <img src={ebook.image} alt={ebook.title} style={styles.bookImage} onClick={() => handleImageClick(ebook)}/>
                <h3 style={styles.bookTitle}>{ebook.title}</h3>
                <p style={styles.bookPrice}>₹{ebook.price}{'.00'}</p>
                <button onClick={() => handleAddToCart(ebook)} style={styles.addToCartButton}>
                  <span style={styles.buttonText}>ADD TO CART</span>
                  <span style={styles.cartIcon}><FaShoppingCart/></span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <h2 style={styles.par2}>
        <span style={styles.dis}>Discover</span>
        <span style={styles.seller}> Books</span></h2>
        <p style={styles.par1}>Explore our comprehensive collection of books.</p>
      <div style={styles.grid}>
        {filteredEbooks.map((ebook, index) => (
          <div
            key={ebook.id}
            style={{
              ...styles.bookItem,
              ...(index >= filteredEbooks.length - 2 ? styles.centeredItem : {}),
            }}
          >
            <img src={ebook.image} alt={ebook.title} style={styles.bookImage} onClick={() => handleImageClick(ebook)}/>
            <h3 style={styles.bookTitle}>{ebook.title}</h3>
            <p style={styles.bookPrice}>₹{ebook.price}{'.00'}</p>
            <button onClick={() => handleAddToCart(ebook)} style={styles.addToCartButton}>
              <span style={styles.buttonText}>ADD TO CART</span>
              <span style={styles.cartIcon}><FaShoppingCart/></span>
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button onClick={goToCheckout} style={styles.checkoutButton}>
          Go to Checkout ({cart.length} items)
        </button>
      </div>
    </div>
  );
};
const styles = {
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
    gap: '30px',
    justifyContent: 'center', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    padding: '0 10px',
  },
  dis:{
    color:'black',
  },
  par2:{
    fontSize:'46px',
    textAlign: 'center',
  }, 
  best:{
    color:'white',
  },
  seller:{
    color:'red',
  },
  container1:{
    backgroundColor: '#1A202C',
    color: '#E2E8F0',
    paddingTop: '10px',
    paddingBottom: '100px',
    paddingLeft:'100px',
    paddingRight:'100px',
  marginTop: '150px',
  marginLeft: '-150px',
  marginRight: '-136px',
  marginBottom: '150px',
    textAlign: 'center',
  justifyContent: 'center',
  },
  par1:{
    fontSize:'24px',
    textAlign: 'center',
    color:'#818080',
    fontFamily:'Aptos Display,Forte',
    lineHeight: '1.2',
    paddingTop:'0',
  },
  logoImage: {
    display: 'block',
    margin: '0 auto',
  },
  catalog: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '54px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Arial Black, sans-serif',
    lineHeight: '0.91',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
  },
  searchInput: {
    padding: '12px 20px',
    width: '60%',
    border: '2px solid #ddd',
    borderRadius: '50px',
    fontSize: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    outline: 'none',
  },
  searchButton: {
    display: 'none', 
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr)', 
    gap: '10px',  
    marginRight:'-120px',
    marginLeft:'-120px',
  },
  bookItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  bookImage: {
    width: '100%',
    height: 'auto', 
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  bookTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin:'10px 0 5px 0',
    color:'black',
  },
  bookPrice: {
    fontSize: '20px',
    color: 'red', 
    fontWeight:'bold',
  },
  addToCartButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001F3F', 
    color: 'white',
    padding: '10px 0',  
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '10px',
  },
  cartIcon: {
    marginLeft: '5px',
    fontSize: '16px',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  centeredItem: {
    justifySelf: 'center', 
    gridColumn: 'span 1', 
    gridRow: 'span 1', 
  },
};

export default Catalog;
