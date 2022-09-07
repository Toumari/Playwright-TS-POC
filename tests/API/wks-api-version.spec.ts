import { expect, test } from '@playwright/test';

test.use({

    extraHTTPHeaders: {
        'Authorization': 'Basic ' + Buffer.from(`${process.env.API_LOGIN}:${process.env.API_PASSWORD}`).toString('base64')
    }

})

test.describe('API Tests', () => {

    test('basic test', async ({ request }) => {
        const version = await request.get(`https://${process.env.BASEURL}/api/v1`)
        expect(version.ok()).toBeTruthy();
        expect(version.status()).toBe(200);
        console.log(await version.json())
        expect(await version.json()).toHaveProperty('auth')
        expect(await version.json()).toHaveProperty('templates', `http://${process.env.BASEURL}/api/v1/templates/`)
        expect(await version.json()).toHaveProperty('version', 1)
    })

    test('get workspaces', async ({ request }) => {

        const workspaces = await request.get(`https://${process.env.BASEURL}/api/v1/workspaces/`)
        expect(workspaces.status()).toBe(200);
        console.log(await workspaces.json())
    })
})


