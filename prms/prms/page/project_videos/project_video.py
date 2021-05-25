import frappe
def get_context(context):
    context['custom1'] = 'Custom Homepage'
    context['users'] = frappe.get_all('User')