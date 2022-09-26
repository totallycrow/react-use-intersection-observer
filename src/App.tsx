import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import useIntersectionObserver from "./Hooks/useIntersectionObserver";

function App() {
  const [divRef, isVisible] = useIntersectionObserver();
  const [test, isTestVisible] = useIntersectionObserver();

  if (isVisible) alert("test");
  if (isTestVisible) alert("test2");

  return (
    <div>
      <h1>test</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et atque
        libero unde sequi possimus, vitae corporis fugit assumenda ullam velit
        mollitia? Debitis maiores odio laboriosam ea optio esse modi,
        repellendus facere dicta, consequuntur adipisci, tenetur corporis iusto
        beatae magnam error a deserunt maxime. Expedita aliquid hic nobis nam,
        provident nihil deserunt molestiae velit, in quos asperiores amet animi
        ipsa tempore? Deserunt vitae earum molestiae cum blanditiis maxime sit
        totam officia atque fugit perspiciatis rerum iste quia, debitis adipisci
        quod dicta vero rem consectetur aut sunt voluptate. Nihil inventore
        beatae, similique nulla quaerat perferendis eligendi excepturi quisquam
        illum eos nam quibusdam ea, itaque fuga aliquid sequi. Corporis
        asperiores eius consequatur repellat rerum earum voluptatum nemo, sequi
        sapiente nesciunt, blanditiis magnam. Perferendis praesentium quam
        architecto optio iste suscipit, non tenetur, ipsam, esse odit quae
        numquam libero officiis rem iure voluptates quisquam dolores ad nemo
        vero veritatis! Impedit ab architecto quibusdam earum quas ullam ipsa.
        Illum repellat ullam dolores possimus obcaecati officia dolorem
        deleniti, impedit minima similique dolorum iste veniam reprehenderit
        amet vitae ea harum voluptatum placeat, nisi aut unde vero ad?
        Voluptatum doloremque, molestias unde mollitia voluptatibus cum ullam
        magni ad dicta, provident quibusdam distinctio nulla quidem. Fugit
        cumque voluptates corrupti eaque mollitia optio, non maxime voluptas
        doloremque, reprehenderit id. Ipsam ut eveniet corporis et facere
        reprehenderit corrupti, vitae mollitia incidunt eaque laudantium
        consequatur quis animi pariatur fugiat eum nostrum natus, odit adipisci
        iusto! Cumque, facere. Fugiat necessitatibus distinctio, rem sequi
        magnam, quibusdam ea non debitis animi libero quaerat nihil voluptate
        vero quo facilis saepe suscipit natus praesentium ipsam atque facere
        cupiditate, consectetur voluptas molestias. Tempora iste enim veritatis.
        Reprehenderit dolores, dicta hic, maiores qui fugiat aut, molestiae quia
        quibusdam repellendus possimus aliquam unde delectus voluptatum commodi!
        Omnis tenetur illo quaerat quidem enim dolores? Odio maiores sequi velit
        dicta iusto laboriosam minima tempora! Quos voluptatem ipsum quod culpa
        ex quidem iure nihil est, distinctio consectetur nulla optio placeat
        voluptatibus deleniti asperiores eveniet adipisci natus eum delectus
        atque quis. Dolorum, in aspernatur quod soluta alias voluptas a
        accusamus magnam, quidem maxime quasi dolor assumenda ut quisquam earum
        laboriosam inventore aut quia qui eaque vel, impedit eligendi explicabo?
        Sapiente mollitia, saepe nam magni fugit quia, dolorem tempora omnis
        numquam illum veniam facilis odit laborum. Dolore atque soluta nam id?
        Magnam reprehenderit tenetur provident, saepe veniam adipisci ipsa modi
        id quo nobis molestias culpa ea quidem quaerat mollitia dolorum delectus
        error rem sequi incidunt illo.
      </p>
      {/* ???????????????????????????????? */}
      <div ref={divRef} className="observed">
        test2
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
        dignissimos eligendi voluptatum. Cumque obcaecati, minima reprehenderit
        repellat dolorem quis id natus fugit eveniet hic iusto eos animi, ea
        doloremque nostrum totam atque debitis unde. Recusandae quia voluptatum
        natus impedit consectetur. Rem suscipit velit deleniti rerum molestias
        eaque corrupti corporis labore neque illo qui dolorum, officia autem
        quam fugiat, atque, repellat totam culpa eius sapiente praesentium?
        Perspiciatis distinctio aut repellat tempore modi veniam quod sint,
        omnis similique quae a minima nam culpa voluptas, quos maiores sapiente?
        Architecto odit eligendi facilis, animi et consequatur non pariatur
        ipsum nemo excepturi, accusamus repellat minus dolor necessitatibus.
        Laudantium cum molestias perferendis culpa cupiditate aut nostrum, non
        deleniti illum beatae quia error nulla officiis unde provident tempore
        neque? Voluptatum eveniet repudiandae eos cumque nobis enim, quidem
        omnis in alias veritatis quas ratione odio voluptatibus impedit.
        Suscipit cumque omnis delectus non dolorem, placeat optio ducimus a
        possimus voluptates itaque corrupti magni! Tempora natus a
        reprehenderit. Reprehenderit, unde. Laudantium blanditiis id est rem
        unde iusto praesentium maxime? Minima quisquam temporibus consectetur?
        Odio qui natus tempora culpa nihil incidunt officiis sapiente quo ipsa
        sed? Quod dolorem, perspiciatis sequi, impedit explicabo sapiente eum,
        optio tenetur laborum repellendus vel iste iusto laboriosam minus rem
        placeat nobis! Architecto deleniti totam voluptates veritatis,
        exercitationem voluptate! Ad praesentium laudantium numquam aperiam
        ullam magni inventore, ipsum assumenda dicta animi est pariatur. Sint
        exercitationem, temporibus, vitae voluptas id nostrum culpa vel animi
        incidunt eveniet molestias voluptate pariatur fuga ratione excepturi
        numquam odio, alias tempore deleniti eius ullam dolor distinctio.
        Placeat molestias laborum ipsum. Libero, molestias. Eaque dolorem quasi
        nobis modi nostrum fugit quam, cum qui inventore ipsum, deserunt nemo
        aspernatur enim aperiam optio corrupti facere debitis dolore sit, culpa
        incidunt. Vitae eveniet autem laborum velit cum praesentium incidunt
        quasi dolore optio voluptates, iure minus fugiat porro sint voluptatum
        doloribus illo maxime in sit. Id maiores consequatur est alias sint.
        Adipisci fugit illo ipsa itaque temporibus similique quidem molestiae
        eum, expedita earum impedit deleniti ipsam eos. Alias ab nisi cum
        voluptates ex hic eius cupiditate sapiente maxime placeat temporibus
        aperiam quo voluptatem iure facere natus ullam consectetur, dolore
        assumenda nam iusto sit illum quibusdam? Modi mollitia placeat, in
        similique dolorem nam harum, dolor eaque dolorum saepe temporibus
        commodi ipsa consectetur enim vero aliquid. Tenetur facilis eius,
        pariatur maiores minus error ut iure modi distinctio quis odio,
        temporibus eaque quidem minima, veniam dolore et. Autem veritatis,
        accusantium veniam deleniti mollitia ducimus in quos dignissimos. Ab
        facere voluptatibus praesentium quas velit, possimus dolor earum sed ut,
        odio assumenda iste vitae quibusdam! Numquam deserunt provident, cumque
        consequuntur consectetur quaerat animi beatae maiores aut est nemo
        repellat maxime nobis ratione aliquid illo enim inventore ex impedit
        dignissimos. Illum velit ab molestiae natus architecto officiis eaque
        laudantium dolore error reprehenderit quisquam qui corporis atque, ut
        asperiores doloribus. Eum maxime earum nobis ipsum consequuntur ullam
        exercitationem quas consectetur ex ducimus eligendi doloremque aliquam
        ipsam odit, blanditiis non animi fugiat pariatur excepturi iure cumque.
        Deserunt ab repellendus ullam quaerat autem nisi soluta dolore
        architecto?
      </p>

      <div ref={test} className="test2">
        test2
      </div>
    </div>
  );
}

export default App;
