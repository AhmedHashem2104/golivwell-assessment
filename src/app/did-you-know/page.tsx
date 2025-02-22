import Image from "next/image"
import Link from "next/link"

export default function DidYouKnow() {
    return (
        <section className="min-h-screen py-16 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed flex items-center">
            <div className="max-w-4xl mx-auto">
                <div className="backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-[#000000CC] border-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-coffee">Did You Know?</h1>

                    <div className="space-y-6 text-lg leading-relaxed text-white">
                        <p>
                            Coffee Is One Of The Most Widely Consumed Beverages In The World, Known For Its Stimulating Effects Due
                            To Caffeine, A Natural Stimulant That Enhances Alertness And Reduces Fatigue. Beyond Its Ability To Keep
                            You Awake, Coffee Has Numerous Health Benefits Backed By Scientific Research.
                        </p>
                        <p>
                            One Of The Most Notable Benefits Of Coffee Is Its Rich Antioxidant Content. Coffee Is A Major Source Of
                            Antioxidants In Many People&apos;s Diets, Often Surpassing Even Fruits And Vegetables In Terms Of Daily
                            Intake. These Antioxidants, Such As Chlorogenic Acid And Polyphenols, Help Combat Oxidative Stress And
                            Inflammation, Reducing The Risk Of Chronic Diseases Like Heart Disease And Cancer.
                        </p>
                        <p>
                            Regular Coffee Consumption Has Also Been Linked To Improved Brain Function. Caffeine Blocks An
                            Inhibitory Neurotransmitter Called Adenosine, Leading To Increased Levels Of Other Neurotransmitters
                            Like Dopamine And Norepinephrine. This Results In Improved Mood, Memory, Reaction Time, And Overall
                            Cognitive Performance.
                        </p>
                        <p>
                            Additionally, Long-Term Coffee Consumption May Lower The Risk Of Neurodegenerative Diseases Like
                            Alzheimer&apos;s And Parkinson&apos;s By Protecting Brain Cells From Damage.
                        </p>
                        <p>
                            Coffee Is Also Beneficial For Metabolism And Physical Performance. Caffeine Boosts Metabolic Rate And
                            Increases Fat Oxidation, Making It A Common Ingredient In Weight Loss Supplements. Furthermore, Caffeine
                            Stimulates The Release Of Adrenaline, Preparing The Body For Physical Exertion. Studies Have Shown That
                            Drinking Coffee Before Exercise Can Improve Endurance And Performance, Making It Popular Among Athletes.
                        </p>
                        <p>
                            Moreover, Coffee May Lower The Risk Of Several Serious Diseases. Research Suggests That Habitual Coffee
                            Drinkers Have A Reduced Risk Of Type 2 Diabetes Due To Improved Insulin Sensitivity And Glucose
                            Metabolism. Additionally, Coffee Has Been Associated With A Lower Risk Of Liver Diseases, Including
                            Liver Cirrhosis And Liver Cancer. Some Studies Even Indicate That Coffee Drinkers Have A Lower Risk Of
                            Depression And Suicide, Possibly Due To Its Positive Effects On Brain Chemistry.
                        </p>
                        <p>
                            Despite Its Benefits, Coffee Should Be Consumed In Moderation. Excessive Caffeine Intake Can Lead To
                            Side Effects Like Insomnia, Increased Heart Rate, And Anxiety. However, For Most People, Drinking 3-4
                            Cups Of Coffee Per Day Is Generally Considered Safe And Beneficial.
                        </p>
                        <p>
                            Overall, Coffee Is More Than Just A Beloved Morning Ritual; It&apos;s A Powerful Beverage With Numerous
                            Health Advantages, Contributing To Longevity And Overall Well-Being.
                        </p>
                    </div>

                    {/* Social Media Links */}

                </div>
                <div className="flex justify-center gap-6 mt-12">
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Image
                            src="/facebook.png?height=40&width=40"
                            alt="Facebook"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </Link>
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Image
                            src="/instagram.png?height=40&width=40"
                            alt="Instagram"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </Link>
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Image
                            src="/youtube.png?height=40&width=40"
                            alt="YouTube"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </Link>
                </div>
            </div>

        </section>
    );
}
