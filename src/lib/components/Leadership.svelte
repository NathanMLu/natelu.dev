<script lang="ts">
    import Curve from '$lib/images/bg-curve.svg';
    import LeadershipCard from "$lib/components/LeadershipCard.svelte";
    import Freetail from "$lib/images/leadership/freetail.png";
    import Csc from "$lib/images/leadership/csc.png";
    import Ptk from "$lib/images/leadership/ptk.png";
    import Riverhacks from "$lib/images/leadership/riverhacks.png";
    import Tasa from "$lib/images/leadership/tasa.jpg";
</script>

<div id="leadership-container">
    <img alt="About background" src="{Curve}" class="w-full -scale-x-100" />
    <div class="bg-white lg:px-24 px-12 pb-12">
        <h2 class="text-dark font-bold text-3xl mb-12">Leadership</h2>

        <div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6">
            <LeadershipCard
                    image="{Freetail}"
                    title="Logistics Team"
                    description="Key organizer and event coordinator for Texas’ largest student-run hackathon, HackTX, with 1000+ attendees."
                    link="https://freetailhackers.com/">
            </LeadershipCard>
            <LeadershipCard
                    image="{Csc}"
                    title="President"
                    description="Grew CS club by 300% by organizing weekly meetings, team projects, workshops, guest speakers, and student org outreach."
                    link="https://austincc.campuslabs.com/engage/organization/acc_csc">
            </LeadershipCard>
            <LeadershipCard
                    image="{Riverhacks}"
                    title="Founder"
                    description="Led ACC's first hackathon for 100 students, organized workshops, logistics, sponsorship, and outreach, ensuring a successful event."
                    link="https://austincs.org/riverhacks/">
            </LeadershipCard>
            <LeadershipCard
                    image="{Tasa}"
                    title="Junior Officer"
                    description="Coordinated logistics for UT's Taiwanese Night Market, including food booths, distribution, and games for 1000+ attendees."
                    link="https://linktr.ee/texastasa">
            </LeadershipCard>
            <LeadershipCard
                    image="{Ptk}"
                    title="Co-Chair"
                    description="Collaborated with experts to educate children on cybersecurity, created an informative website, and distributed free laptops."
                    link="https://www.ptk.org/">
            </LeadershipCard>
        </div>
    </div>
</div>

<style>
    #leadership-container {
        margin-top: 10vh;
        margin-bottom: 10vh;
    }

    @media (max-width: 1024px) {
        #leadership-container {
            margin-top: 5vh;
            margin-bottom: 5vh;
        }
    }

    @media (max-width: 764px) {
        #leadership-container {
            margin-top: 2.5vh;
            margin-bottom: 2.5vh;
        }
    }
</style>


