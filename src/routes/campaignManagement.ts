import { Router } from "express";
import prisma from "../db/prisma.js";
const router = Router();


//*Create new campaign --------------------------------->
router.post("/", async (req, res) => {
  const { CompanyName, companyDescription, productDescription, targetAudience, userId } = req.body;
  try {
    const campaign = await prisma.campaign.create({
      data: {
        CompanyName,
        companyDescription,
        productDescription,
        targetAudience,
        userId,
      },

    });
    res.json(campaign);
  } catch (error) {
    res.status(400).json({ error: "Unable to create campaign" });
  }
});

//* get all campaigns from one user--------------------->
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const campaigns = await prisma.campaign.findMany({
      where: {
        userId: userId
      },
      select: {
        id: true,
        CompanyName: true,
        companyDescription: true,
        productDescription: true,
        targetAudience: true,
        emails: {
          select: {
            id: true,
            subject: true,
            content: true,
            recipients: true
          }
        }
      }
    });
    res.json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ error: 'Unable to get campaigns for the user' });
  }
});

//* get one specific campaign--------------------------->
router.get('/:id', async (req, res) => {
  const campaignId = req.params.id;
  try {
    const campaign = await prisma.campaign.findUnique({
      where: {
        id: campaignId,
      },
    });
    res.json(campaign);
  } catch (error) {
    res.status(500).json({ error: 'failed to get campaign' })
  }
})

//* update one campaign--------------------------------->
router.put('/:id', async (req, res) => {
  try {

  } catch (error) {
    res.status(400).json({ error: 'unable to update campaign' })
  }
})

//* delete one campaign--------------------------------->
router.delete('/:id', async (req, res) => {
  try {

  } catch (error) {
    res.status(400).json({ error: 'unable to delete campaign' })
  }

})