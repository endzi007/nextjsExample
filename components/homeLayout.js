import Image from "next/image";
export default function HomeComponent() {
    return (
        <div>
            <section style={{
                display: "flex",

            }}>
                <div
                    style={{
                        backgroundColor: "white",
                        width: "500px",
                        height: "100px",
                        boxShadow: "0 0 20px 1px rgba(0,0,0, 0.7)",
                        borderRadius: "4px",
                    }}
                >Card</div>
                <Image 
                    src="/photos/dog.png"
                    alt="DogPIcture"
                    width={500}
                    height={500}
                />
            </section>
            <section>
                section 1
            </section>
            <section>
                section 1
            </section>
            <section>
                section 1
            </section>
            
        </div>
    );
    
}
  